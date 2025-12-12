import { ListTodo } from "lucide-react";

export default function TaskHeader() {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2">
        <h1 className=" text-4xl font-bold text-balance">Mis Tareas</h1>
        <ListTodo size={40} color="#0046FF" />
      </div>

      <p className="text-muted-foreground text-lg mt-2">
        Organiza y gestiona tu día de forma eficiente
      </p>
    </div>
  );
}
