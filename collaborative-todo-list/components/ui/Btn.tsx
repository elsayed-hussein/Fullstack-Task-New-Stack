type Props = {
  btnText: string | null;
  btnIcon?: JSX.Element | null;
};
const Btn = (props: Props) => {
  return (
    <button className=" bg-sky-200 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-xl inline-flex items-center">
      {props.btnIcon}
      <span className="ml-2">{props.btnText}</span>
    </button>
  );
};
export default Btn;
