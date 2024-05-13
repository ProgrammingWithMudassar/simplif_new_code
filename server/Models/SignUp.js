import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// User Schema
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  accountType : { type: String, default: 'influencer' },
}, { timestamps: true });

// Profile Schema
const profileSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  country: { type: String, required: true },
  customURL: { type: String, required: true },
  description: { type: String, required: true },
  aboutYourSelf: { type: String, required: true },
  niches: [{ type: String }],
  gender: { type: String, required: true },
}, { timestamps: true });

const imageSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  Img: { type: String },
  ImgPublicId: { type: String },
  imgType: { type: Number }
});

// Social Connection Schema
const socialConnectionSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  followers: [{
    link: { type: String, required: true },
    count: { type: Number, required: true }
  }]
});

// Package Schema
const packageSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  packages: [{
    whatOffer: { type: String, required: true },
    price: { type: Number, required: true },
    deliveryTime: { type: Number, required: true },
    description: { type: String, required: true },
    socialAccountName: { type: String, required: true }
  }]
});


// Models
const User = model('User', userSchema);
const Profile = model('Profile', profileSchema);
const SocialConnection = model('SocialConnection', socialConnectionSchema);
const Package = model('Package', packageSchema);
const Images = model('Images', imageSchema);


export { User, Profile, SocialConnection, Package, Images };
