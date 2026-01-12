import axios from 'axios';

export const searchImg = query =>
  axios.get('https://pixabay.com/api/', {
    params: {
      key: '48498756-24fea4538a1b2e6f47cfee5c0',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
