import express from 'express';
import { User, Profile, Package, SocialConnection,Images } from '../../Models/SignUp.js';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';


export const allUsers = asyncHandler(async (req, res) => {
    try {
        const allUsers = await User.find({});
        const userDataPromises = allUsers.map(async user => {
            const userId = user._id;
            const profileData = await Profile.findOne({ userId });
            const packageData = await Package.findOne({ userId });
            const socialConnectionData = await SocialConnection.findOne({ userId });
            const imageData = await Images.findOne({ userId });

            return {
                user,
                profile: profileData,
                packages: packageData,
                socialConnections: socialConnectionData,
                Images: imageData
            };
        });

        // Resolve all promises to get combined data for all users
        const combinedUserData = await Promise.all(userDataPromises);
        res.status(200).json(combinedUserData);
    } catch (err) {
        console.error('Error retrieving all users and their related data:', err);
        res.status(500).json({ message: 'Failed to retrieve data', error: err.message });
    }
    
})