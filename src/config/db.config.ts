import "dotenv/config";
import mongoose from "mongoose";
let isConnected: boolean = false;

export const ConnectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jd9hrzt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
    // await mongoose.connect(uri);

    const db = await mongoose.connect(uri!);

    isConnected = !!db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    // mongoose.disconnect();
    throw new Error("Database connection failed");
  }
};
