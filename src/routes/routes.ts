import { Router } from "express";
import { TaskController } from "../controllers/TaskController.js";

const router = Router();

router.post("/", TaskController.newTask);
router.get("/", TaskController.listAll);
router.get("/:id", TaskController.listById);
router.put("/:id", TaskController.completeTask);

export default router;

// routes
// controller
// service
// repository
