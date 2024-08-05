import mongoose from "mongoose";

const dbConect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("db conected!");
  } catch (error) {
    console.log("Error connecting DB", error);
  }
};

export default dbConect;
