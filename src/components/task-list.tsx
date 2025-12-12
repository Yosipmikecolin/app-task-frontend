import type { Task } from "../interfaces/task";
import TaskItem from "./task-item";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const completedCount = tasks.filter((task) => task.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="space-y-4">
      {/* Barra de progreso */}
      {totalCount > 0 && (
        <div className="bg-white border border-border border-gray-200 box-shadow-sm rounded-lg p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {completedCount} de {totalCount} completadas
            </p>
            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all"
                style={{
                  width: `${
                    totalCount > 0 ? (completedCount / totalCount) * 100 : 0
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Lista de tareas */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
