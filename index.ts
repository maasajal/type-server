import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 1111;

app.get("/", (req: Request, res: Response) => {
  res.send({
    message:
      "Hello new backend learner, let's learn with TypeScript and Mongoose",
  });
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
