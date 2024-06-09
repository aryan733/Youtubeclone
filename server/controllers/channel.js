import mongoose from 'mongoose';
import users from '../models/auth.js';

export const updateChannelData = async (req, res) => {
    const { id: _id } = req.params; 
    const { name, desc } = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({ message: "Invalid channel ID" });
        }

        const updateData = await users.findByIdAndUpdate(_id, { name, desc }, { new: true });

        if (!updateData) {
            return res.status(404).json({ message: "Channel not found" });
        }

        res.status(200).json(updateData);
    } catch (error) {
        res.status(500).json({ message: "Failed to update channel", error: error.message });
    }
};

export const getAllChannels = async (req, res) => {
    try {
        const allChannels = await users.find({}, { _id: 1, name: 1, email: 1, desc: 1 });
        res.status(200).json(allChannels);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch channels", error: error.message });
    }
};
