import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
const cors = require("cors");
import { ConnectDB } from "./src/config/db.config";
import authRoutes from "./src/routes/authRoutes";

const app: Express = express();
const port = process.env.PORT || 1111;

ConnectDB();

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message:
      "Hello new backend learner, let's learn with TypeScript and Mongoose",
  });
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
