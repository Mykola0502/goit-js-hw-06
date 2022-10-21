const inputChangeEl = document.querySelector('input[type="number"]');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');
let amount;
let divSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onInputChange = event => (amount = event.currentTarget.value);

const createBoxes = () => {
  for (let i = 1; i <= amount; i += 1) {
    const divMarkup = `<div style="background-color:${getRandomHexColor()}; width:${divSize}px; height:${divSize}px;"></div>`;
    divSize += 10;
    divBoxesEl.insertAdjacentHTML('beforeend', divMarkup);
  }
};

const destroyBoxes = () => {
  divBoxesEl.innerHTML = '';
  divSize = 30;
};

inputChangeEl.addEventListener('input', onInputChange);
btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);
