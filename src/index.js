import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";


dotenv.config({
  path: "./env",
});

const port = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port , ${port}`);
    });
    app.on("error", (err) => {
      console.error("An error occurred:", err);
    });
    app.get("/", (req, res) => {
      res.send(`🚀 This is my server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log("Connection failed ", err);
  });

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
