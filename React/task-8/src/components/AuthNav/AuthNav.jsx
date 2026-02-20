import clsx from "clsx";
import { NavLink } from "react-router";
import css from "./AuthNav.module.css";

const linkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.link_active);
};

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink to="/register" className={linkStyles}>
        Register
      </NavLink>
      <NavLink to="/login" className={linkStyles}>
        Log in
      </NavLink>
    </div>
  );
}
