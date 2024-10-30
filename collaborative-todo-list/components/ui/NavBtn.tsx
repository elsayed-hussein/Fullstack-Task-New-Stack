import Btn from "./Btn";

type Props = {
  navBtnText: string | null;
  navBtnIcon?: JSX.Element | null;
  navBtnLink: string | null;
};
const NavBtn = async (props: Props) => {
  const { navBtnText, navBtnIcon } = props;
  return (
    <div className="flex gap-8">
      <Btn
        btnText={props.navBtnText}
        btnIcon={props.navBtnIcon}
        btnLink={props.navBtnLink}
      />
    </div>
  );
};
export default NavBtn;
