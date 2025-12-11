export interface Task {
  _id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: string;
}

export type CreateTaskDto = Omit<Task, "_id" | "createdAt">;
export type UpdateTaskDto = Omit<Task, "createdAt">;
