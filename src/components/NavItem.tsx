import { NavLink } from "react-router-dom";

type IProps = {
  path: string;
  title: string;
};

function NavItem({ path, title }: IProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
      data-testid="Link"
    >
      {title}
    </NavLink>
  );
}

export default NavItem;
