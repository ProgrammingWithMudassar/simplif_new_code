import { waitlistModel } from "../../Models/Waitlist.js";

export const createWaitlist = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send({ message: "Email is required" });
        }

        // Check if the email already exists in the waitlist
        const existingEntry = await waitlistModel.findOne({ email });
        if (existingEntry) {
            return res.status(409).send({ message: "Email already exists in the waitlist" });
        }

        // Create a new entry if the email does not exist
        const newEntry = await waitlistModel.create({ email });
        res.status(201).send(newEntry);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export const getWaitlist = async (req, res) => {
    try {
        const entries = await waitlistModel.find({});
        res.status(200).send(entries);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};