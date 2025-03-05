import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Database is not connected", err));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
import userRoutes from "./routes/user.js";
import taskRoutes from "./routes/tasks.js";
app.use("/user", userRoutes);
app.use("/task", taskRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
