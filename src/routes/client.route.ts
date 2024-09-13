import express from "express";
import { readClient } from "../controllers/client";

const router = express.Router();

router.get("/", readClient);

export default router;
