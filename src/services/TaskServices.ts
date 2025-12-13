import { type Task } from "../entities/Task.js";
import type { TaskRepository } from "../repositories/TaskRepository.js";

export class TaskService {
  constructor(private repo: TaskRepository) {}

  createTask(title: string, description: string, priority: string): Task {
    const task = this.repo.create(title, description, priority);
    return task;
  }

  listTasks() {
    return this.repo.findAll();
  }

  listById(id: number) {
    return this.repo.findById(id);
  }

  completeTask(id: number) {
    return this.repo.completeById(id);
  }

  deleteTask(id: number) {
    return this.repo.delete(id);
  }

  filterByPriority(priority: string) {
    return this.repo.filterByPriority(priority);
  }
}
