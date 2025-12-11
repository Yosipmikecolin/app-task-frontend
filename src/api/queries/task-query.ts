import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../requests/task-requests";

//? Obtener todas las tareas
export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
};
