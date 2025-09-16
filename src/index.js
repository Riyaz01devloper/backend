// import mongoose from "mongoose";
// import {DB_NAME} from "./constants.js"


// import express from "express";
// (async () => {
//   try {
//  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
// console.log("Connected to MongoDB");
// app.on("error", () =>{
//     console.log("Error connecting to MongoDB")
//     throw error
// })
//   }
//     catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         throw error
//     }
// })();
  
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB()
.then(() =>{[
    app.listen(process.env.PORT|| 8000, () => {
        console.log(`server is running on port : $
            {process.env.PORT}`);
    })
]})
.catch(err)