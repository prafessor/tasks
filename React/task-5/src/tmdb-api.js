import axios from "axios";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      "trending/movie/day?language=en-US",
      options
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getSearchedMovies = async (query) => {
  try {
    const option = {
      ...options,
      params: {
        query,
        language: "en-US",
      },
    };

    const response = await axios.get("search/movie", option);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getMovieById = async (movieId) => {
  try {
    const option = {
      ...options,
      language: "en-US",
    };

    const response = await axios.get(`movie/${movieId}`, option);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getMovieDetail = async (movieId, type) => {
  try {
    const option = {
      ...options,
      language: "en-US",
    };

    const response = await axios.get(`movie/${movieId}/${type}`, option);
    return response.data;
  } catch (err) {
    return err;
  }
};
