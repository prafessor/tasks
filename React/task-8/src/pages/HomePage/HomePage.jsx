import { Link } from "react-router";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <div className={css.container}>
        <Link className={css.link} to="/contacts">
          Lets try to create contact
        </Link>
      </div>
    </main>
  );
}
