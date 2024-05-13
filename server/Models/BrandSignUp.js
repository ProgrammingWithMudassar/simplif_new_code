import { Schema, model } from 'mongoose';


const brandSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    company_name: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    verified: { type: Boolean, default: false },
    accountType : { type: String, default: 'brand' },
    createdAt: { type: Date, default: Date.now },
});

const brandModel = model('brandModel', brandSchema);

export {
    brandModel
};
