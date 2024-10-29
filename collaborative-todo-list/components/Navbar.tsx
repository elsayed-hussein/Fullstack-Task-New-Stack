import NavLogo from "@/components/ui/NavLogo";
import NavTitle from "@/components/ui/NavTitle";
import NavBtn from "./ui/NavBtn";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between p-4 mx-8 my-2  border-b">
      <NavLogo />
      <NavTitle />
      <NavBtn />
    </div>
  );
};
export default Navbar;
