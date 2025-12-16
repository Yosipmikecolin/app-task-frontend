import { LoaderCircle, Plus } from "lucide-react";
import { useCreateTask } from "../api/mutations/task-mutation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

// ? 🧪 Esquema de validación con Zod
const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "El título es requerido")
    .max(20, "El título debe tener un máximo de 20 caracteres"),
  description: z
    .string()
    .trim()
    .min(1, "La descripción es requerida")
    .max(50, "La descripción debe tener un máximo de 50 caracteres"),
});

type TaskFormData = z.infer<typeof taskSchema>;

export default function TaskForm() {
  const { mutateAsync, isPending } = useCreateTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data: TaskFormData) => {
    try {
      await mutateAsync({
        title: data.title,
        description: data.description,
        completed: false,
      });
      reset();
      toast.success("Tarea creada exitosamente");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-border border-gray-200 box-shadow-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <h2 className="text-xl font-semibold text-card-foreground mb-4">
        Nueva Tarea
      </h2>

      <div className="space-y-4">
        {/* Título */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-card-foreground mb-2"
          >
            Título
          </label>

          <input
            id="title"
            {...register("title")}
            placeholder="Ej: Comprar leche"
            className="border-gray-200 box-shadow-sm focus:border-blue-500
 focus:box-shadow-sm w-full px-4 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none transition-all"
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-card-foreground mb-2"
          >
            Descripción
          </label>

          <textarea
            id="description"
            {...register("description")}
            placeholder="Ej: Recordar comprar leche en la tienda"
            rows={3}
            className="border-gray-200 box-shadow-sm focus:border-blue-500
 focus:box-shadow-sm w-full px-4 py-2 bg-background border border-input rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-primary/50 transition-all resize-none"
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Botón */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer bg-linear-to-r from-blue-500 to-blue-600 text-white font-lg py-3 px-4 rounded-md hover:shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <LoaderCircle size={20} className="animate-spin" />
          ) : (
            <div className="flex items-center gap-2">
              <Plus size={20} /> Agregar
            </div>
          )}
        </button>
      </div>
    </form>
  );
}
