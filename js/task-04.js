let counterValue = 0;
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.getElementById("value");
decrementBtnEl.addEventListener("click", () => {
  counterEl.textContent = --counterValue;
});
incrementBtnEl.addEventListener("click", () => {
  counterEl.textContent = ++counterValue;
});
