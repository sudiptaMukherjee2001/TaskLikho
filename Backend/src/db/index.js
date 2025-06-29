import mongoose from "mongoose";
import {DatabaseName} from "../../constant.js";
export const databaseConnection = async () => {
    try {
        const connectionResponse=await mongoose.connect(`${process.env.MONGODB_URI}/${DatabaseName}`);
         console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed:", error);
    }
}