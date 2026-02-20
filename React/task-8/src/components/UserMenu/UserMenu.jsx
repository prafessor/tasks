import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {username}</p>
      <button className={css.btn} type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
}
