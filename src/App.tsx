import { useState } from "react";
import TaskList from "./components/task-list";
import TaskForm from "./components/task-form";
import { useTasks } from "./api/queries/task-query";
import TaskHeader from "./components/task-header";
import TaskFilter from "./components/task-fillter";

export type FilterType = "all" | "completed" | "pending";

function App() {
  const { data: tasks = [], isLoading } = useTasks();
  const [filter, setFilter] = useState<FilterType>("all");
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <TaskHeader />

        {/* Formulario de creacion de tareas */}
        <div className="mb-8">
          <TaskForm />
        </div>

        {/* Filtros de tareas */}
        {!isLoading && tasks.length > 0 && (
          <TaskFilter tasks={tasks} filter={filter} setFilter={setFilter} />
        )}

        {/* Lista de tareas */}
        {isLoading ? (
          <div className="text-center text-muted-foreground py-12">
            Cargando tareas...
          </div>
        ) : (
          <TaskList tasks={filteredTasks} />
        )}

        {/* Mensaje de estado vacio */}
        {!isLoading && filteredTasks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-2">
              {filter === "all"
                ? "No hay tareas aún"
                : `No hay tareas ${
                    filter === "completed" ? "completadas" : "sin completar"
                  }`}
            </p>
            <p className="text-muted-foreground">
              Crea una nueva tarea para empezar
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
