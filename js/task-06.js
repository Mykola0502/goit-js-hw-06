// const textInput = document.querySelector('#validation-input');

// textInput.addEventListener('blur', event => {
//   if (
//     event.currentTarget.value.length == textInput.getAttribute('data-length')
//   ) {
//     console.log('Правильно');
//     textInput.classList.remove('invalid');
//     textInput.classList.add('valid');
//     console.log(textInput.classList);
//     return;
//   } else {
//     console.log('Не правильно');
//     textInput.classList.remove('valid');
//     textInput.classList.add('invalid');
//     console.log(textInput.classList);
//   }
// });

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
  if (!event.currentTarget.value) {
    textInput.classList.remove('invalid', 'valid');
    console.log(textInput.classList);
  } else if (
    event.currentTarget.value.length ===
    Number(textInput.getAttribute('data-length'))
  ) {
    console.log('Правильно');
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
    console.log(textInput.classList);
  } else {
    console.log('Не правильно');
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
    console.log(textInput.classList);
  }
});
