import type { Request, Response } from "express";
import { TaskService } from "../services/TaskServices.js";
import { TaskRepository } from "../repositories/TaskRepository.js";

const service = new TaskService(new TaskRepository());

export class TaskController {
  public static newTask(req: Request, res: Response) {
    try {
      const { title, description, priority } = req.body;

      const task = service.createTask(title, description, priority);
      return res.status(201).json(task);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }

  public static listAll(req: Request, res: Response) {
    const tasks = service.listTasks();
    return res.status(200).json(tasks);
  }

  public static listById(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "Invalid id" });
    }

    try {
      const task = service.listById(id);
      return res.status(200).json(task);
    } catch (error: any) {
      return res.status(404).json({ error: "Task not found" });
    }
  }

  public static completeTask(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
      const task = service.completeTask(id);
      return res.status(200).json(task);
    } catch (error: any) {
      return res.status(404).json({ error: "Task not found" });
    }
  }

  public static filterByPriority(req: Request, res: Response) {
    const priority = req.params.priority;
    if (!priority) {
      return res.status(400).json({
        error: "Priority parameter is required",
      });
    }

    try {
      const tasks = service.filterByPriority(priority);
      return res.status(200).json(tasks);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
