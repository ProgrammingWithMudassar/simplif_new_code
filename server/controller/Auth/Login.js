import { brandModel } from '../../Models/BrandSignUp.js';
import { User } from '../../Models/SignUp.js'
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';


const JWT_SECRET = 'simplif_jwt_secret';

// Route for registering a new brand
export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide both email and password' });
    }

    try {
        // Check both collections, first attempt to find a brand, then a user
        let user = await brandModel.findOne({ email });
        if (!user) {
            user = await User.findOne({ email });
        }
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        // Verify password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        // Generate token with 2 days expiration
        const token = jwt.sign(
            { userId: user._id, email: user.email }, 
            JWT_SECRET, 
            { expiresIn: '2d' }
        );

        res.cookie('token', token, {
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production', 
            expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) 
        });
        
        // Return the token, user ID, account type, and a success message
        res.json({
            status: 200,
            token: token,
            userId: user._id,
            accountType: user.accountType,
            message: 'Login successfully'
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login process' });
    }
});


