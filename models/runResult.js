import mongoose from "mongoose";
const runResultSchema = new mongoose.Schema({
  distance: { type: Number, required: true }, // meters or km
  time: { type: Number, required: true },     // seconds or minutes
  speed: { type: Number, required: true },    // calculated
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("RunResult", runResultSchema);