import Image from "next/image";
import LogoImg from "../../public/images/todo.svg";
import Link from "next/link";
type Props = {};
const NavLogo = (props: Props) => {
  return (
    <div className="">
      <Link aria-label="To-Do-Logo" href="/">
        <Image priority height={42} width={42} src={LogoImg} alt="To-Do-Logo" />
      </Link>
    </div>
  );
};
export default NavLogo;
