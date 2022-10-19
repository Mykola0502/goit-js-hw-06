const checkInput = document.querySelector('#font-size-control');
const textOutput = document.querySelector('#text');

checkInput.addEventListener('input', event => {
  textOutput.style.fontSize = `${event.currentTarget.value}px`;
});
