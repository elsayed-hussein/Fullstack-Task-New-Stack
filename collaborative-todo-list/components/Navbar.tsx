import NavLogo from "@/components/ui/NavLogo";
import NavTitle from "@/components/ui/NavTitle";
import NavBtn from "./ui/NavBtn";

type Props = {
  navBtnText: string | null;
  navBtnIcon?: JSX.Element | null;
  navBtnLink: string | null;
};
const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between p-4 mx-8 my-2  border-b">
      <NavLogo />
      <NavTitle />
      <NavBtn
        navBtnText={props.navBtnText}
        navBtnIcon={props.navBtnIcon}
        navBtnLink={props.navBtnLink}
      />
    </div>
  );
};
export default Navbar;
