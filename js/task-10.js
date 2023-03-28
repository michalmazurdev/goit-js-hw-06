function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('input[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const boxesEl = document.querySelector("#boxes");

const createBoxes = (amount) => {
  if (inputEl.value === "") {
    alert("Please specify the number 1-100");
  }
  let markup = ``;
  for (
    let i = boxesEl.children.length;
    i < Number(inputEl.value) + Number(boxesEl.children.length);
    i++
  ) {
    markup += `<div style=
    "width: ${30 + i * 10}px;
    height: ${30 + i * 10}px;
    background-color: ${getRandomHexColor()}">
    </div>`;
  }
  boxesEl.innerHTML += markup;
};
const destroyBoxes = () => {
  boxesEl.innerHTML = ``;
};
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
