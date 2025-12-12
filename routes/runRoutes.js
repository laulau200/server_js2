import express from "express";
import { addRun, getRuns } from "../controllers/runController.js";

const router = express.Router();

router.post("/", addRun);
router.get("/", getRuns);

export default router;