import iziToast from 'izitoast';
import { searchImg } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const searchFormEl = document.querySelector('form');

const onSearchFromSubmit = evt => {
  evt.preventDefault();
  const query = evt.currentTarget.elements['search-text'].value.trim();

  if (query.length === 0) {
    return;
  }
  clearGallery();
  showLoader();

  searchImg(query)
    .then(response => {
      const images = response.data.hits;

      if (images.length === 0) {
        iziToast.error({
          title:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(images);
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFromSubmit);
