let counterValue = 0;
const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const counterEl = document.getElementById("value");
decrementBtnEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
incrementBtnEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});
