import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDb = async() => {
    try {
        const DB_URL = process.env.MONGODB_URI
        if(!DB_URL){
            console.log("No database url found");
            process.exit(1);
        }
        await mongoose.connect(DB_URL as string); 
        console.log("Database connected successfully");
        
    } catch (error) {
        
    }
}

export default connectToDb;