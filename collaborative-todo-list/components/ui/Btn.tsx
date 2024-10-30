import Link from "next/link";

type Props = {
  btnText: string | null;
  btnIcon?: JSX.Element | null;
  btnLink: string | null;
};
const Btn = (props: Props) => {
  return (
    <button className=" bg-sky-200 hover:bg-sky-600 text-gray-800 font-bold py-2 px-4 rounded-xl inline-flex items-center">
      {props.btnIcon}

      <Link href={`${props.btnLink}`}>
        <span className="ml-2">{props.btnText}</span>
      </Link>
    </button>
  );
};
export default Btn;
