import express from 'express';
import { brandModel } from '../../Models/BrandSignUp.js';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import nodemailer from 'nodemailer';
import util from 'util';
import NodeCache from 'node-cache'; 
import { sendOTP } from '../../helpers/emailService.js';

const otpCache = new NodeCache({ stdTTL: 300 });
const router = express.Router();


// Helper function to generate OTP
function generateOTP() {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}



// Route for registering a new brand
export const brandregister = asyncHandler(async (req, res) => {
    const { name, email, company_name, password } = req.body;

    const existingBrand = await brandModel.findOne({ email });
    if (existingBrand) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    if (!isStrongPassword(password)) {
        return res.status(400).json({ message: 'Password is not strong enough' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const newBrand = new brandModel({
        name,
        email,
        company_name,
        password: hashedPassword
    });
    await newBrand.save();

    // Promisify the sendMail method to use with async/await
    const emailSent = await sendOTP(email, otp);
    if (!emailSent) {
        return res.status(500).json({ message: 'Failed to send verification email' });
    }

    // Store the OTP in the cache with the email as the key
    otpCache.set(otp, { email, otp });
    console.log(`OTP stored for ${email}: ${otp}`);

    res.status(201).json({ message: 'Brand registered successfully. Please check your email to verify your account.' });
});

// Function to check if the password is strong
function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    const hasCapital = /[A-Z]/.test(password);
    const hasSmall = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    return hasCapital && hasSmall && hasNumber && hasSpecial;
}


export const brandverify = asyncHandler(async (req, res) => {
    const { otp } = req.body;
    console.log( otp );
    const cacheEntry = otpCache.get(otp);

    if (!cacheEntry) {
        return res.status(400).json({ message: 'OTP expired or invalid' });
    }
    const { email } = cacheEntry;
    otpCache.del(otp);

    const updatedUser = await brandModel.findOneAndUpdate(
        { email },
        { $set: { verified: true } },
        { new: true }
    );
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ status: 200, message: 'OTP validated successfully, user verified', user: updatedUser });
});

// Resend OTP API
export const resendOTP = asyncHandler(async (req, res) => {
    const { email } = req.body;
    console.log(email);

    // Check if the email is registered
    const existingBrand = await brandModel.findOne({ email });
    if (!existingBrand) {
        return res.status(400).json({ message: 'Email is not registered' });
    }

    // Generate a new OTP
    const otp = generateOTP();

    // Send the new OTP to the user's email
    const emailSent = await sendOTP(email, otp);
    if (!emailSent) {
        return res.status(500).json({ message: 'Failed to resend OTP' });
    }

    // Update the OTP in the cache
    otpCache.set(otp, { email, otp });

    return res.status(200).json({ status: 200, message: 'New OTP sent successfully. Please check your email.' });
});


export default router;
