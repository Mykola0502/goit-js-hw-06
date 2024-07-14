const formEl = document.querySelector('.login-form');
const user = {};
console.log(user);

formEl.setAttribute('autocomplete', 'off');

formEl.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Будь ласка заповніть всі поля!');
  }
  user.email = email.value;
  user.password = password.value;
  console.log(user);
  event.currentTarget.reset();
}

const formLogin = document.querySelector(".login-form");

// formLogin.addEventListener("submit", onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();
//   const form = evt.target;
//   const email = form.elements.email.value;
//   const password = form.elements.password.value;

//   if (email && password) {
//     const user = { email, password };
//     console.log(user);
//     form.reset();
//   } else {
//     alert("всі поля повинні бути заповнені");
//   }
// }
