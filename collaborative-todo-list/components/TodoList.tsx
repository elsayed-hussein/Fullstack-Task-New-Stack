import Todo from "@/components/ui/Todo";
type Props = {};
const TodoList = (props: Props) => {
  return (
    <div className="w-full">
      <Todo TodoText="Test" />
      <Todo TodoText=" tow" />
    </div>
  );
};
export default TodoList;
