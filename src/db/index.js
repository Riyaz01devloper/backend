import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n Connected to MongoDB !! DB HOST:$
        {connectionInstance.connnection.host}`);
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1)
    }
    }
export default connectDB;

import dotenv from "dotenv";
import connectDB from"./db/index.js";
dotenv.config({
    path: './env'
});
connectDB();