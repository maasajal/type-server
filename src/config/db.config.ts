import "dotenv/config";
import mongoose from "mongoose";
export const ConnectDB = async () => {
  try {
    const uri =  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.jd9hrzt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
    await mongoose.connect(uri);
    // await mongoose.connect(`${process.env.DB_URI}`);
    console.log(`the DB is connected with ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error connecting to the database", error);
    mongoose.disconnect();
  }
};
