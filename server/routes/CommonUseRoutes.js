import express from "express";
import multer from 'multer';
import { createWaitlist, getWaitlist } from '../controller/common/index.js';
import { brandregister, brandverify, resendOTP } from '../controller/Auth/Brand.js'
import { allUsers } from '../controller/common/AllUsers.js'
import {
    influencerRegister, createProfile,
    createPackages, createSocialConnection,
    createImages, InfluencerVerify
} from '../controller/Auth/Influencer.js'
import { login } from '../controller/Auth/Login.js'


const router = express.Router();
const upload = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 5000000 } 
});


// Route to create a new navbar
router.route("/waitlist")
    .post(createWaitlist)
    .get(getWaitlist);

router.post("/login", login);

router.post("/brand-register", brandregister);
router.post("/brand-verify", brandverify);
router.post("/resend-otp", resendOTP);

router.post("/influencer-register", influencerRegister);
router.post("/influencer-verify", InfluencerVerify);

router.post("/create-profile", createProfile);
router.post("/create-packages", createPackages);
router.post("/create-socialConnection", createSocialConnection);
router.post("/upload-img", upload.single('Img'), createImages);
router.get("/allUsers", allUsers);


export default router;
