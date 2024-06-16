 import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection.STATES.connected) {
      console.log("Connected to MongoDB");
    }
  } catch (error) {
    return error.message;
  }
};

export { connectDB };