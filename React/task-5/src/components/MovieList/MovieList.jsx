import { Link, useLocation } from "react-router";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map((movie) => {
        const { id, title, poster_path } = movie;

        return (
          <li className={css.item} key={id}>
            <Link to={`/movies/${id}`} state={location}>
              <img
                className={css.image}
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={title}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
