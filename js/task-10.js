/**
 *           insertAdjacentHTML (працює, але не правильно зроблено (в циклі))
 */

// const inputChangeEl = document.querySelector('input[type="number"]');
// const btnCreateEl = document.querySelector('button[data-create]');
// const btnDestroyEl = document.querySelector('button[data-destroy]');
// const divBoxesEl = document.querySelector('#boxes');
// let amount;
// let divSize = 30;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const onInputChange = event => (amount = event.currentTarget.value);

// const createBoxes = () => {
//   for (let i = 1; i <= amount; i += 1) {
//     const divMarkup = `<div style="background-color:${getRandomHexColor()}; width:${divSize}px; height:${divSize}px;"></div>`;
//     divSize += 10;
//     divBoxesEl.insertAdjacentHTML('beforeend', divMarkup);
//   }
// };

// const destroyBoxes = () => {
//   divBoxesEl.innerHTML = '';
//   divSize = 30;
// };

// inputChangeEl.addEventListener('input', onInputChange);
// btnCreateEl.addEventListener('click', createBoxes);
// btnDestroyEl.addEventListener('click', destroyBoxes);

/**
 *      createElement
 */

const inputChangeEl = document.querySelector('input[type="number"]');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');
let amount;
let divSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleInputChangeEl(event) {
  amount = event.currentTarget.value;
}

let divsEl = [];

function handleBtnCreateEl() {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    divEl.style.width = `${divSize}px`;
    divEl.style.height = `${divSize}px`;

    divSize += 10;
    divsEl.push(divEl);
  }
  divBoxesEl.append(...divsEl);
  console.log(divsEl);
}

// const divBoxesChildrenEl = divBoxesEl.childNodes;
// let divDeleted;
// function handleBtnDestroyEl() {
//   for (let i = 0; i < divBoxesChildrenEl.length; i += 1) {
//     divDeleted = divBoxesChildrenEl[i];
//     divDeleted.remove();
//   }
//   divsEl = [];
//   divSize = 30;
// }

// function handleBtnDestroyEl() {
//   [...divBoxesEl.children].forEach(element => element.remove());
//   divsEl = [];
//   divSize = 30;
// }

function handleBtnDestroyEl() {
  divBoxesEl.querySelectorAll('div').forEach(element => element.remove());
  divsEl = [];
  divSize = 30;
}

inputChangeEl.addEventListener('input', handleInputChangeEl);
btnCreateEl.addEventListener('click', handleBtnCreateEl);
btnDestroyEl.addEventListener('click', handleBtnDestroyEl);

/**
 *       insertAdjacentHTML
 */

// const inputChangeEl = document.querySelector('input[type="number"]');
// const btnCreateEl = document.querySelector('button[data-create]');
// const btnDestroyEl = document.querySelector('button[data-destroy]');
// const divBoxesEl = document.querySelector('#boxes');
// let amount;
// let divSize = 30;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const onInputChange = event => (amount = event.currentTarget.value);

// let divMarkup = '';

// const createBoxes = () => {
//   for (let i = 1; i <= amount; i += 1) {
//     divMarkup += `<div style="background-color:${getRandomHexColor()}; width:${divSize}px; height:${divSize}px;"></div>`;
//     divSize += 10;
//   }

//   divBoxesEl.insertAdjacentHTML('beforeend', divMarkup);
//   divMarkup = '';
// };

// const destroyBoxes = () => {
//   divBoxesEl.innerHTML = '';
//   divSize = 30;
// };

// inputChangeEl.addEventListener('input', onInputChange);
// btnCreateEl.addEventListener('click', createBoxes);
// btnDestroyEl.addEventListener('click', destroyBoxes);

/**
 *       insertAdjacentHTML (ще один варіант)
 */

// const boxesContainer = document.querySelector("#boxes");
// const createBoxesBtn = document.querySelector("[data-create]");
// const destroyBoxesBtn = document.querySelector("[data-destroy]");
// const countBoxesEl = document.querySelector('input[type="number"]');

// countBoxesEl.addEventListener("input", onInput);
// createBoxesBtn.addEventListener("click", onCreateClick);
// destroyBoxesBtn.addEventListener("click", onDestroyClick);

// let countBoxes = null;

// function createBoxes(amount) {
//   console.log(amount);
//   let markup = "";
//   for (let i = 1, w = 30; i <= amount; i += 1, w += 10) {
//     markup += `<div style="background-color: ${getRandomHexColor()}; width: ${w}px; height: ${w}px"></div>`;
//   }
//   boxesContainer.insertAdjacentHTML("beforeend", markup);
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }

// function onCreateClick() {
//   createBoxes(countBoxes);
// }

// function onDestroyClick() {
//   destroyBoxes();
// }

// function onInput(evt) {
//   countBoxes = Number(evt.target.value);
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

