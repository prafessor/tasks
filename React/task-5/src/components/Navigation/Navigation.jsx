import { NavLink } from "react-router";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
