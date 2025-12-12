import { useState } from "react";
import {
  Trash2,
  CheckCircle2,
  Circle,
  Pencil,
  X,
  Save,
  LoaderCircle,
} from "lucide-react";
import type { Task } from "../interfaces/task";
import { useDeleteTask, useUpdateTask } from "../api/mutations/task-mutation";
import toast from "react-hot-toast";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const { mutateAsync: updateTask, isPending: updateTaskPending } =
    useUpdateTask();
  const deleteTask = useDeleteTask();

  const [isEditing, setIsEditing] = useState(false);
  const [values, setValues] = useState({
    title: task.title,
    description: task.description || "",
  });

  //? Confirmar de la tarea
  const handleToggle = async () => {
    try {
      await updateTask({
        _id: task._id,
        title: values.title,
        description: values.description,
        completed: !task.completed,
      });
      toast.success("Estado actualizado exitosamente");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  //? Actualizar la tarea
  const handleSave = async () => {
    if (!values.title || !values.description) {
      toast.error("Todos los campos son obligatorios");
      return;
    } else {
      try {
        await updateTask({
          _id: task._id,
          title: values.title,
          description: values.description,
          completed: task.completed,
        });
        setIsEditing(false);
        toast.success("Tarea actualizada exitosamente");
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
    }
  };

  //? Eliminar la tarea
  const handleDelete = async () => {
    try {
      await deleteTask.mutateAsync(task._id);
      toast.success("Tarea eliminada exitosamente");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  // ? Cancelar la tarea
  const handleCancel = () => {
    setValues({
      title: task.title,
      description: task.description || "",
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white border border-border border-gray-200 box-shadow-sm rounded-lg p-4 transition-all hover:shadow-md">
      {/* Logica para completar la tarea */}
      <div className="flex items-start gap-4">
        {!isEditing && (
          <button
            onClick={handleToggle}
            disabled={updateTaskPending}
            className={`cursor-pointer mt-1 transition-all focus:outline-none ${
              task.completed
                ? "bg-linear-to-r from-green-500 to-green-600 text-white rounded-lg p-1 shadow-md"
                : "text-muted-foreground hover:text-blue-500 rounded-lg p-1 shadow-md text-gray-400"
            }`}
            aria-label={
              task.completed
                ? "Marcar como incompleta"
                : "Marcar como completada"
            }
          >
            {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
          </button>
        )}

        {/* Contenido que se muestra cuando no se está editando */}
        <div className="flex-1 min-w-0 space-y-2">
          {isEditing ? (
            <div>
              <h2 className="text-lg font-semibold">Editar Tarea</h2>
              <div className="space-y-2">
                <input
                  type="text"
                  value={values.title}
                  onChange={(e) =>
                    setValues({ ...values, title: e.target.value })
                  }
                  className="border-gray-200 box-shadow-sm focus:border-blue-500
 focus:box-shadow-sm w-full px-4 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none transition-all"
                  placeholder="Título de la tarea"
                />
                <textarea
                  value={values.description}
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                  className="border-gray-200 box-shadow-sm focus:border-blue-500
 focus:box-shadow-sm w-full px-4 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none transition-all"
                  placeholder="Descripción (opcional)"
                  rows={2}
                />
              </div>
              <button
                onClick={handleSave}
                disabled={updateTaskPending}
                className="cursor-pointer p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors focus:outline-none disabled:opacity-50"
                aria-label="Guardar cambios"
              >
                {updateTaskPending ? (
                  <LoaderCircle size={20} className="animate-spin" />
                ) : (
                  <Save size={20} />
                )}
              </button>
              <button
                onClick={handleCancel}
                disabled={updateTaskPending}
                className="cursor-pointer p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors focus:outline-none disabled:opacity-50"
                aria-label="Cancelar edición"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            /* Contenido que se muestra cuando no se está editando */
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-balance">
                  {task.title}
                </h3>
                <div>
                  {task.description && (
                    <p className="text-sm mt-1 text-balance">
                      {task.description}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    {new Date(
                      task.createdAt || Date.now()
                    ).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="cursor-pointer text-gray-400 bg-gray-100 p-2 text-muted-foreground hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors focus:outline-none"
                  aria-label="Editar tarea"
                >
                  <Pencil size={20} />
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deleteTask.isPending}
                  className="cursor-pointer text-gray-400 bg-gray-100 p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors focus:outline-none disabled:opacity-50"
                  aria-label="Eliminar tarea"
                >
                  {deleteTask.isPending ? (
                    <LoaderCircle size={20} className="animate-spin" />
                  ) : (
                    <Trash2 size={20} />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
