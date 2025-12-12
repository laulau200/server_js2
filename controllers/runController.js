import RunResult from "../models/RunResult.js";

export const addRun = async (req, res) => {
  try {
    const { distance, time } = req.body;

    if (!distance || !time) {
      return res.status(400).json({ error: "distance and time are required" });
    }

    // SPEED CALCULATION
    const speed = distance / time;

    const newRun = await RunResult.create({ distance, time, speed });
    res.json(newRun);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRuns = async (req, res) => {
  try {
    const results = await RunResult.find().sort({ createdAt: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};