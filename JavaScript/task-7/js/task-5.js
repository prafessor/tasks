function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const output = document.querySelector('.color');
const btn = document.querySelector('.change-color');

const handleBtnClick = evt => {
  const color = getRandomHexColor();

  output.textContent = color;
  document.body.style.backgroundColor = color;
};
btn.addEventListener('click', handleBtnClick);
