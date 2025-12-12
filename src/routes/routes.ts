import { Router } from "express";
import type { Request, Response } from "express";
import { TaskController } from "../controllers/TaskController.js";

const router = Router();

router.post("/", TaskController.newTask);
router.get("/", TaskController.list);

export default router;
