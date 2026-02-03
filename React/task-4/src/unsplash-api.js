import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const searchImageQuery = async (query, page) => {
  const options = {
    params: {
      client_id: import.meta.env.VITE_ACCESS_TOKEN,
      query,
      page,
    },
  };
  const response = await axios.get(`/search/photos`, options);
  return response.data;
};
