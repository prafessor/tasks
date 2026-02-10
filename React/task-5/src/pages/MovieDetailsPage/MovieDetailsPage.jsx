import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router";
import { getMovieById } from "../../tmdb-api";
import css from "./MovieDetailsPage.module.css";
import BtnBack from "../../components/BtnBack/BtnBack";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await getMovieById(movieId);
        setMovie(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    getMovie();
  }, [movieId]);

  return (
    <>
      <BtnBack />
      {movie ? (
        <>
          <div className={css.container}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt=""
            />
            <div>
              <h1>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h1>
              <p>User Score: {movie.vote_average || "0"}%</p>
              <p>Overview</p>
              <p>{movie.overview}</p>
              <p>Genres</p>
              <p>
                {movie.genres.map((genre) => genre.name).join(" ") ||
                  "Not setted"}
              </p>
            </div>
          </div>

          <div className={css.additional_container}>
            <p>Additional information</p>
            <ul className={css.additional_list}>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </div>

          <Outlet />
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </>
  );
}
