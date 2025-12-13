import { Task } from "../entities/Task.js";

export class TaskRepository {
  private tasks: Task[] = [];
  private currentId = 1;

  create(title: string, description: string, priority: string): Task {
    const task = new Task(this.currentId++, title, description, priority);
    this.tasks.push(task);
    return task;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((t) => t.id === id);
    return this.tasks.splice(index, 1)
  }

  findAll() {
    return this.tasks;
  }

  findById(id: number) {
    return this.tasks.find((t) => t.id === id);
  }

  completeById(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error("Task not found.");
    }
    task.complete();
    return task;
  }

  filterByPriority(priority: string) {
    return this.tasks.find((t) => t.priority === priority);
  }
}
