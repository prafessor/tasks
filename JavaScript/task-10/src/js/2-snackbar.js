import iziToast from 'izitoast';

const formEl = document.querySelector('.form');

const createPromise = (delay, state) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  return promise;
};

const onFormSubmit = evt => {
  evt.preventDefault();
  const delay = evt.currentTarget.elements.delay.value;
  const state = evt.currentTarget.elements.state.value;

  if (delay < 0) {
    iziToast.error({
      title: 'Please enter a positive number',
      position: 'topRight',
    });
    return;
  }

  createPromise(delay, state)
    .then(value => {
      iziToast.success({
        title: value,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.error({
        title: error,
        position: 'topRight',
      });
    });

  evt.currentTarget.reset();
};

formEl.addEventListener('submit', onFormSubmit);
