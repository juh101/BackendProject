import dotenv from "dotenv";
import connectDB from './db/index.js';


dotenv.config({
    path: './env'
})


connectDB();


/*
import express from 'express';
const app = express();

;( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log("error");
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch(err){
        console.log("Error while connecting to the database", err);
        throw err;
    }
})()
*/