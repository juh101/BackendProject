import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  console.log("DB Name:", DB_NAME);

  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `Connected to MongoDB database: ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.log("Error while connecting to the database", err);
    process.exit(1);
  }
};

export default connectDB;
