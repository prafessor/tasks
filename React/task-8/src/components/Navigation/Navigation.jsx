import { Link } from "react-router";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <Link to="/" className={css.link}>
        Home
      </Link>

      {isLoggedIn && (
        <Link to="/contacts" className={css.link}>
          Contacts
        </Link>
      )}
    </nav>
  );
}
