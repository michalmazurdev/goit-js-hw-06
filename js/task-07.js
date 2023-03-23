const inputEl = document.getElementById("font-size-control");
const targetEl = document.getElementById("text");

inputEl.addEventListener("change", () => {
  targetEl.style.fontSize = `${inputEl.value}px`;
});
