import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import runRoutes from "./routes/runRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/runningApp")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// routes
app.use("/api/runs", runRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));