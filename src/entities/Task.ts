export class Task {
  private _id: number;
  private _title: string;
  private _description: string;
  private _priority: string;
  private _createdAt: Date;
  private _completedAt: Date | null = null;

  constructor(id: number, t: string, d: string, p: string) {
    if (!t || t.trim().length < 3) {
      throw new Error("Title must have at least 3 characteres.");
    }

    this._id = id;
    this._title = t;
    this._description = d;
    this._priority = p;
    this._createdAt = new Date();
  }
  get id() { return this._id; }
  get title() { return this._title; }
  get description() { return this._description; }
  get priority() { return this._priority; }
  get createdAt() { return this._createdAt; }
  get completedAt() { return this._completedAt; }

  set title(newTitle: string) {
    if (!newTitle || newTitle.trim().length < 3) {
      throw new Error("Title must have at least 3 characteres.");
    }
    this._title = newTitle;
  }
  set description(newDesc: string) {
    this._description = newDesc;
  }
  set priority(newPriority) {
    this._priority = newPriority;
  }

  complete() {
    if (this._completedAt) return;
    this._completedAt = new Date();
  }

  isCompleted() {
    return this._completedAt !== null;
  }
}
