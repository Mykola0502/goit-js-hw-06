const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const textStart = textOutput.textContent;

textInput.addEventListener('input', event => {
  if (event.currentTarget.value) {
    textOutput.textContent = event.currentTarget.value;
    return;
  }
  textOutput.textContent = textStart;
});
