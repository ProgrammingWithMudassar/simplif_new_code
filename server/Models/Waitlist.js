import { Schema, model } from 'mongoose';


const wailtlistSchema = new Schema({
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});

const waitlistModel = model('waitlistModel', wailtlistSchema);

export {
    waitlistModel
};
