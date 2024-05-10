import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        const mongodbUri = process.env.MONGODB_URI;
        if (!mongodbUri) {
            console.log("MONGODB_URI environment variable is not set.");
            return;
        }

        await mongoose.connect(mongodbUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error", error);
    }
};
