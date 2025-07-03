import "reflect-metadata";
import express from "express";
import * as dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import userRoutes from "./routes/users";
import authRouter from "./routes/auth";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOption = {
  origin: true,
  credentials: true,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRouter);
AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error during database initialization:", error);
    process.exit(1);
  });
