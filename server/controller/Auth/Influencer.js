import express from 'express';
import { User, Profile, Package, SocialConnection, Images } from '../../Models/SignUp.js';
import asyncHandler from 'express-async-handler';
import { cloudinary } from '../../helpers/upload.js';
import { sendOTP } from '../../helpers/emailService.js';
import NodeCache from 'node-cache';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'



const JWT_SECRET = 'simplif_jwt_secret';
const otpCache = new NodeCache({ stdTTL: 300 });



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
// Helper function to generate OTP
function generateOTP() {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}


// Route for registering a new Influencer
export const influencerRegister = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingInfluencer = await User.findOne({ email });
    if (existingInfluencer) {
        return res.status(400).json({ message: 'Email is already registered' });
    }

    // Check if the password is strong enough
    if (!isStrongPassword(password)) {
        return res.status(400).json({ message: 'Password is not strong enough' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();

    // Create a new Influencer
    const newInfluencer = new User({
        name,
        email,
        password: hashedPassword
    });

    // Save the new Influencer
    await newInfluencer.save();

    const emailSent = await sendOTP(email, otp);
    if (!emailSent) {
        return res.status(500).json({ message: 'Failed to send verification email' });
    }

    // Store the OTP in the cache with the email as the key
    otpCache.set(otp, { email, otp });

    res.status(201).json({ status: 201, otp: otp, message: 'Brand registered successfully. Please check your email to verify your account.' });
});

export const InfluencerVerify = asyncHandler(async (req, res) => {
    const { otp } = req.body;
    const cacheEntry = otpCache.get(otp);

    if (!cacheEntry) {
        return res.status(400).json({ message: 'OTP expired or invalid' });
    }
    const { email } = cacheEntry;
    otpCache.del(otp);

    const updatedUser = await User.findOneAndUpdate(
        { email },
        { $set: { verified: true } },
        { new: true }
    );
    if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Generate JWT token
    const token = jwt.sign(
        { userId: updatedUser._id, email: updatedUser.email }, 
        JWT_SECRET,
        { expiresIn: '2d' }
    );

    // Set token in a cookie
    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    });

    // Return the token, user ID, account type, and a success message
    res.status(200).json({
        status: 200,
        token: token,
        userId: updatedUser._id,
        accountType: updatedUser.accountType,
        message: 'OTP validated successfully, user verified and logged in'
    });
});

export const createProfile = async (req, res) => {
    try {
        const { userId, country, customURL, description, aboutYourSelf, niches, gender } = req.body;

        // Check if the user exists
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // User exists, create the profile
        const profile = new Profile({
            userId,
            country,
            customURL,
            description,
            aboutYourSelf,
            niches,
            gender
        });
        await profile.save();
        res.status(201).json(profile);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.message });
    }
};

export const createPackages = asyncHandler(async (req, res) => {
    try {
        const { userId, packages } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate input
        if (!userId || !packages || !Array.isArray(packages) || packages.length === 0) {
            return res.status(400).json({ message: 'Invalid packages data' });
        }

        // Create a new package instance
        // Corrected usage of ObjectId
        const newPackage = new Package({
            userId: new mongoose.Types.ObjectId(userId),
            packages: packages.map(pack => ({
                whatOffer: pack.whatOffer,
                price: pack.price,
                deliveryTime: pack.deliveryTime,
                description: pack.description,
                socialAccountName: pack.socialAccountName
            }))
        });


        // Save the package to the database
        await newPackage.save();
        return res.status(201).json({ message: 'Package added successfully', package: newPackage });
    } catch (err) {
        console.error('Error adding package:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

export const createSocialConnection = asyncHandler(async (req, res) => {
    try {
        const { userId, followers } = req.body;

        const existingUser = await User.findById(userId);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Validate input
        if (!userId || !followers || !Array.isArray(followers) || followers.length === 0) {
            return res.status(400).json({ message: 'Invalid followers data' });
        }

        // Create a new package instance
        // Corrected usage of ObjectId
        const newSocialConnection = new SocialConnection({
            userId: new mongoose.Types.ObjectId(userId),
            followers: followers.map(pack => ({
                link: pack.link,
                count: pack.count,
            }))
        });


        // Save the package to the database
        await newSocialConnection.save();
        return res.status(201).json({ message: 'Package added successfully', followers: newSocialConnection });
    } catch (err) {
        console.error('Error adding package:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

export const createImages = asyncHandler(async (req, res) => {
    const { userId, imgType } = req.body;
    const existingUser = await User.findById(userId);
    if (!existingUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    let imgUrl, imgPublicId;
    if (req.file) {
        // Upload image to Cloudinary
        const cloudinaryUpload = await cloudinary.uploader.upload(req.file.path);
        imgUrl = cloudinaryUpload.secure_url;
        imgPublicId = cloudinaryUpload.public_id;

        // Create or update image record in MongoDB
        const newImages = new Images({
            userId: userId,
            Img: imgUrl,
            ImgPublicId: imgPublicId,
            imgType: imgType
        });
        await newImages.save();
        return res.status(201).json({ message: 'Image uploaded and record updated successfully', images: newImages });
    } else {
        // No file provided, check for existing record
        const existingRecord = await Images.findOne({ userId });
        if (existingRecord) {
            imgUrl = existingRecord.Img;
            imgPublicId = existingRecord.ImgPublicId;
            imgType = existingRecord.imgType;
            return res.status(200).json({ message: 'No new image provided. Existing record used.', images: existingRecord });
        } else {
            return res.status(400).json({ message: "No image provided and no existing record to use." });
        }
    }
});
