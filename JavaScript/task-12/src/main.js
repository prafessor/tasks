import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

const searchFormEl = document.querySelector('form');
const loadMoreBtn = document.querySelector('button[data-loadMore]');

let query = '';
let page = null;
let totalPage = 0;
let cardheight = null;

// event function for form
const onSearchFromSubmit = async evt => {
  evt.preventDefault();
  page = 1;
  query = evt.currentTarget.elements['search-text'].value.trim();

  if (query.length === 0) {
    return;
  }
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const response = await getImagesByQuery(query, page);

    hideLoader();
    if (response.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(response.hits);
    const cardEl = document.querySelector('.gallery li');
    cardheight = cardEl.getBoundingClientRect().height;

    totalPage = Math.ceil(response.totalHits / 15);
    if (totalPage > page) {
      showLoadMoreButton();
      return;
    }
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } catch (err) {
    hideLoader();
    console.log(err.message);
  }
};

// event function for load more
const onBtnMoreClick = async evt => {
  hideLoadMoreButton();
  showLoader();

  page += 1;

  try {
    const response = await getImagesByQuery(query, page);

    hideLoader();
    createGallery(response.hits);
    scrollBy({
      top: cardheight * 3 + 24 * 2 - 44,
      behavior: 'smooth',
    });

    if (totalPage > page) {
      showLoadMoreButton();
      return;
    }

    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } catch (err) {
    hideLoader();
    console.log(err.message);
  }
};


searchFormEl.addEventListener('submit', onSearchFromSubmit);
loadMoreBtn.addEventListener('click', onBtnMoreClick);

// -----------------------------

// common event function
const onActionWithSearchImg = async evt => {
  evt.preventDefault();

  if (evt.currentTarget === searchFormEl) {
    page = 1;
    query = evt.currentTarget.elements['search-text'].value.trim();

    if (query.length === 0) {
      return;
    }
    clearGallery();
  } else {
    page += 1;
  }

  hideLoadMoreButton();
  showLoader();

  try {
    const response = await getImagesByQuery(query, page);
    console.log(response);

    hideLoader();
    if (response.hits.length === 0) {
      iziToast.error({
        message:
        'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(response.hits);
    if (evt.currentTarget === searchFormEl) {

      const cardEl = document.querySelector('.gallery li');
      cardheight = cardEl.getBoundingClientRect().height;

      totalPage = Math.ceil(response.totalHits / 15);
    } else {
      scrollBy({
        top: cardheight * 3 + 24 * 2 - 44,
        behavior: 'smooth',
      });
    }

    if (totalPage > page) {
      showLoadMoreButton();
      return;
    }
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
  } catch (err) {
    hideLoader();
    console.log(err.message);
    iziToast.error({
      message: "Something went wrong. Please try again",
      position: "topRight",
    })
  }
};

// searchFormEl.addEventListener('submit', onActionWithSearchImg);
// loadMoreBtn.addEventListener('click', onActionWithSearchImg);

