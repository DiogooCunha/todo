import type { Request, Response } from "express";
import { TaskService } from "../services/TaskServices.js";
import { TaskRepository } from "../repositories/TaskRepository.js";

const service = new TaskService(new TaskRepository());

export class TaskController {
  public static newTask(req: Request, res: Response) {
    try {
      const { title, description, priority } = req.body;

      const task = service.createTask(
        title,
        description,
        priority,
      );
      return res.status(201).json(task);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  public static list(req: Request, res: Response) {
    const tasks = service.listTasks();
    return res.json(tasks);
  }
}
