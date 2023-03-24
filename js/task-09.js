function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const buttonEL = document.querySelector(".change-color");
const colorInfoEl = document.querySelector(".color");
buttonEL.addEventListener("click", () => {
  let newColor = getRandomHexColor();
  colorInfoEl.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
});
