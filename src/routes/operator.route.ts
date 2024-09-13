import express from "express";
import {
  createOperator,
  deleteOperator,
  getOneOperator,
  readOperators,
  updateOperator,
} from "../controllers/operator";
const router = express.Router();

router.post("/", createOperator);
router.get("/", readOperators);
router.put("/:id", updateOperator);
router.get("/:id", getOneOperator);
router.delete("/:id", deleteOperator);

export default router;
