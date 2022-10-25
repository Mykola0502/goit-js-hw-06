const btnChangeColorEl = document.querySelector('.change-color');
const outputTextEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnChangeColorElClick = () => {
  const bodyColor = getRandomHexColor();

  // bodyEl.style.backgroundColor = bodyColor;
  bodyEl.setAttribute('style', `background-color: ${bodyColor}`);
  outputTextEl.textContent = bodyColor;
};

btnChangeColorEl.addEventListener('click', onBtnChangeColorElClick);
