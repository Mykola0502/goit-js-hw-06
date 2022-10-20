const btnChangeColorEl = document.querySelector('.change-color');
const outputTextEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnChangeColorElClick = () => {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  outputTextEl.textContent = `${getRandomHexColor()}`;
};

btnChangeColorEl.addEventListener('click', onBtnChangeColorElClick);
