import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

// functions for time
const convertMs = ms => {
  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const addLeadingZero = value => String(value).padStart(2, 0);

// inital elements and variables
const btnStart = document.querySelector('button[data-start]');
const inputDate = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('.value[data-days]');
const hoursEl = document.querySelector('.value[data-hours]');
const minutesEl = document.querySelector('.value[data-minutes]');
const secondsEl = document.querySelector('.value[data-seconds]');

let userSelectedDate;

// set and create date picker
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      iziToast.error({
        title: 'Please choose a date in the future',
        position: 'topRight',
      });

      btnStart.disabled = true;
      return;
    }

    btnStart.disabled = false;
    userSelectedDate = selectedDates[0];
  },
};

flatpickr(inputDate, options);

// create timer
const onClickBtnStart = () => {
  if (userSelectedDate <= Date.now()) {
    iziToast.error({
      title: 'Please choose a date in the future',
      position: 'topRight',
    });
    btnStart.disabled = true;
    return;
  }

  btnStart.disabled = true;
  inputDate.disabled = true;

  const intervalId = setInterval(() => {
    const timeToEnd = userSelectedDate - Date.now();

    if (timeToEnd < 1000) {
      clearInterval(intervalId);
      inputDate.disabled = false;
    }

    const time = convertMs(timeToEnd);
    const { days, hours, minutes, seconds } = time;

    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 1000);
  console.log(userSelectedDate);
};

btnStart.addEventListener('click', onClickBtnStart);
