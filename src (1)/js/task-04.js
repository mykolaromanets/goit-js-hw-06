const buttonDec = document.querySelector('button[data-action = "decrement"]');
const buttonInc = document.querySelector('button[data-action = "increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;
buttonDec.addEventListener("click", (event) => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
buttonInc.addEventListener("click", (event) => {
  counterValue += 1;
  counter.textContent = counterValue;
});
