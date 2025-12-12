import type { FilterType } from "../App";
import type { Task } from "../interfaces/task";

interface TaskFilterProps {
  filter: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  tasks: Task[];
}

export default function TaskFilter({
  filter,
  setFilter,
  tasks,
}: TaskFilterProps) {
  return (
    <div className="flex gap-3 mb-8 flex-wrap">
      <button
        onClick={() => setFilter("all")}
        className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-all ${
          filter === "all"
            ? "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg"
            : "bg-white border border-border border-gray-200 text-muted-foreground hover:bg-muted"
        }`}
      >
        Todas ({tasks.length})
      </button>

      <button
        onClick={() => setFilter("pending")}
        className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-all ${
          filter === "pending"
            ? "bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-lg"
            : "bg-white border border-border border-gray-200 text-muted-foreground hover:bg-muted"
        }`}
      >
        Sin completar ({tasks.filter((t) => !t.completed).length})
      </button>

      <button
        onClick={() => setFilter("completed")}
        className={`cursor-pointer px-4 py-2 rounded-md font-medium transition-all ${
          filter === "completed"
            ? "bg-linear-to-r from-green-500 to-green-600 text-white shadow-lg"
            : "bg-white border border-border border-gray-200 text-muted-foreground hover:bg-muted"
        }`}
      >
        Completadas ({tasks.filter((t) => t.completed).length})
      </button>
    </div>
  );
}
