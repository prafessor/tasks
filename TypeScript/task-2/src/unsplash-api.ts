import axios from 'axios';
import { Image } from './types';

interface FetchImage {
  results: Image[];
  total: number;
  total_pages: number; 
}

export default async function searchImage(queryImg: string, currentPage: number): Promise<FetchImage> {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'nnKU6nPDzY3KzcUccSsntrotYQOV49QahVuopMsamZs',
      query: queryImg,
      page: currentPage,
    },
  });
  console.log(response.data)
  return response.data;
}
