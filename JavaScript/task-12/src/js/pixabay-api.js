import axios from 'axios';

export const getImagesByQuery = async (q, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '48498756-24fea4538a1b2e6f47cfee5c0',
      q,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
