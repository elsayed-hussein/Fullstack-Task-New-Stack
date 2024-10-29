import Btn from "@/components/ui/Btn";
type Props = {
  TodoText: string | null;
};
const Todo = (props: Props) => {
  return (
    <div className="flex justify-between items-center gap-8 p-4 mx-8 my-2 border-b w-full">
      <div>{props.TodoText}</div>
      <Btn btnText="Done" btnIcon={null} />
    </div>
  );
};
export default Todo;
