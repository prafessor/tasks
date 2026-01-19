import SimpleLightbox from 'simplelightbox';

const galleryEl = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnMore = document.querySelector('button[data-loadMore]');

const modal = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250
});

export const createGallery = (images) => {

  const imageList = images
    .map(img => {
      const {
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = img;

      return `<li>
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
      </a>
      <div class="descr">
        <div class="descr-item">
          <span class="descr-label">Likes</span>
          <span class="descr-text">${likes}</span>
        </div>
        <div class="descr-item">
          <span class="descr-label">Views</span>
          <span class="descr-text">${views}</span>
        </div>
        <div class="descr-item">
          <span class="descr-label">Comments</span>
          <span class="descr-text">${comments}</span>
        </div>
        <div class="descr-item">
          <span class="descr-label">Downloads</span>
          <span class="descr-text">${downloads}</span>
        </div>
      </div>
    </li>`;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', imageList);
  modal.refresh();
};

export const clearGallery = () => {
  galleryEl.innerHTML = "";
};

export const showLoader = () => {
  loader.style.display = 'block';
};
export const hideLoader = () => {
  loader.style.display = 'none';
};

export const showLoadMoreButton = () => {
  btnMore.classList.remove("hidden");
}
export const hideLoadMoreButton = () => {
  btnMore.classList.add("hidden");
}