import TodoForm from "@/components/ui/TodoForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto my-8 gap-4">
      <div className=" max-w-sm">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}
