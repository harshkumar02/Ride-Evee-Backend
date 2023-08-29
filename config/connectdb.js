import mongoose from "mongoose";

const connectDB = async (MONGO_URI) => {
  try {
    const DB_OPTIONS = {
      dbname: "RideEvee",
    };
    await mongoose.connect(MONGO_URI, DB_OPTIONS);
    console.log("connect successfully...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
