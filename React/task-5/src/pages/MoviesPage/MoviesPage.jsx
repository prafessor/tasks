import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getSearchedMovies } from "../../tmdb-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => {
    const query = searchParams.get("query");
    if (query !== null) {
      return query;
    }
    return "";
  });
  const [movies, setMovies] = useState([]);

  const updateQueryParams = (query) => {
    const updatedParams = new URLSearchParams(searchParams);
    if (query !== "") {
      updatedParams.set("query", query);
    } else {
      updatedParams.delete("query");
    }

    setSearchParams(updatedParams);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        if (query === "") {
          return;
        }

        const response = await getSearchedMovies(query);
        setMovies(response.results);
      } catch (err) {
        console.log(err);
      }
    };

    getMovies();
  }, [query]);

  return (
    <>
      <SearchBar onSearch={setQuery} updateParams={updateQueryParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}
