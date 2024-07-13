// const counter = {
//   counterValue: 0,
//   increment() {
//     this.counterValue += 1;
//   },
//   decrement() {
//     this.counterValue -= 1;
//   },
// };

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const counterValueEl = document.querySelector('#value');

// decrementBtn.addEventListener('click', () => {
//   counter.decrement();
//   counterValueEl.textContent = counter.counterValue;
// });

// incrementBtn.addEventListener('click', () => {
//   counter.increment();
//   counterValueEl.textContent = counter.counterValue;
// });

const counter = {
  counterValue: 0,
  decrement() {
    this.counterValue -= 1;
    if (this.counterValue === 0) {
      decrementBtn.disabled = true;
    }
  },
  increment() {
    this.counterValue += 1;
    if (this.counterValue > 0) {
      decrementBtn.disabled = false;
    }
  },
};
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);

if (counter.counterValue === 0) {
  decrementBtn.disabled = true;
}

function onDecrement() {
  // if (counter.counterValue <= 1) {
  //   decrementBtn.disabled = true;
  // }
  if (counter.counterValue > 0) {
    counter.decrement();
  } else {
    counter.counterValue = 0;
  }

  counterValueEl.textContent = counter.counterValue;
}

function onIncrement() {
  counter.increment();

  // if (counter.counterValue > 0) {
  //   decrementBtn.disabled = false;
  // }

  counterValueEl.textContent = counter.counterValue;
}
