import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateTaskDto, UpdateTaskDto } from "../../interfaces/task";
import { createTask, deleteTask, updateTask } from "../requests/task-requests";

//? Crear una tarea
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newTask: CreateTaskDto) => createTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

//? Actualizar una tarea
export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updates: UpdateTaskDto) => updateTask(updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

//? Eliminar una tarea
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
