function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");

buttonEl.addEventListener("click", (event) => {
  const bodyBackgraoundColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyBackgraoundColor;
  textEl.textContent = bodyBackgraoundColor;
});
