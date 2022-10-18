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
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    this.counterValue -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', () => {
  counter.decrement();
  if (counter.counterValue < 0) {
    counter.counterValue = 0;
  }
  counterValueEl.textContent = counter.counterValue;
});

incrementBtn.addEventListener('click', () => {
  counter.increment();
  counterValueEl.textContent = counter.counterValue;
});
