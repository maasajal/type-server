import { Request, Response } from "express";
import User from "../models/userModel";
import generateToken from "../utils/generateToken";
import { ConnectDB } from "../config/db.config";

export const registerUser = async (req: Request, res: Response) => {
  await ConnectDB();
  try {
    const userData = req.body;
    const { email } = userData;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send({ message: "User already exists" });
    }
    const addUser = await User.create(userData);
    if (addUser) {
      const token = generateToken(email);
      res.status(200).send({ message: token });
    } else {
      res.status(400).send({ message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  const users = await User.find();
  if (users) {
    res.status(200).send(users);
  } else res.status(404).send({ Error: "Users not found!" });
};
