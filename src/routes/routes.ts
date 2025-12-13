import { Router } from "express";
import { TaskController } from "../controllers/TaskController.js";

const router = Router();

router.post("/", TaskController.newTask);
router.get("/", TaskController.listAll);
router.get("/:id", TaskController.listById);
router.put("/:id", TaskController.completeTask);
router.get("/priority/:priority", TaskController.filterByPriority);

export default router;

// routes
// controller
// service
// repository
