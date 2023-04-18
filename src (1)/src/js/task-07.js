const inputEL = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEL.addEventListener("input", (event) => {
  const fontSize = event.target.value + "px";
  textEl.style.fontSize = fontSize;
});
