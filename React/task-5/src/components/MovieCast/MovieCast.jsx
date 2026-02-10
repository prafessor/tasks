import { useEffect, useState } from "react";
import { getMovieDetail } from "../../tmdb-api";
import { useParams } from "react-router";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCasts = async () => {
      try {
        const response = await getMovieDetail(movieId, "credits");
        setCasts(response.cast);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCasts();
  }, [movieId]);

  return (
    <>
      {casts.length > 0 ? (
        <div>
          <ul>
            {casts.map((cast) => (
              <li key={cast.id}>
                <img
                  className={css.image}
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt=""
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Casts not found</p>
      )}
    </>
  );
}
