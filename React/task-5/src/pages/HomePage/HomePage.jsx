import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../tmdb-api";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setMovies(response.results);
      } catch (err) {
        console.log(err.message);
      }
    };

    loadMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
}
