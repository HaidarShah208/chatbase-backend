import "reflect-metadata";
import express from "express";
import * as dotenv from "dotenv";
import { AppDataSource } from "./config/database";
import userRoutes from "./routes/users";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);

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
