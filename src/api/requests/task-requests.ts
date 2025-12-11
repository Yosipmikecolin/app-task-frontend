import axiosConfig from "../axios";
import type { CreateTaskDto, Task, UpdateTaskDto } from "../../interfaces/task";

export const getTasks = async () => {
  const { data } = await axiosConfig.get<Task[]>("/tasks");
  return data;
};

export const createTask = async (task: CreateTaskDto) => {
  const { data } = await axiosConfig.post<Task>("/tasks", task);
  return data;
};

export const updateTask = async (task: UpdateTaskDto) => {
  const { _id, ...rest } = task;
  const { data } = await axiosConfig.put<Task>(`/tasks/${_id}`, rest);
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await axiosConfig.delete<Task>(`/tasks/${id}`);
  return data;
};
