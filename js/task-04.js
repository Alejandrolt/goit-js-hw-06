const counter = document.querySelector('#counter');
const value = counter.querySelector('#value');
const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');

let currentValue = 0;

decrementButton.addEventListener('click', () => {
  currentValue--;
  value.textContent = currentValue;
});

incrementButton.addEventListener('click', () => {
  currentValue++;
  value.textContent = currentValue;
});