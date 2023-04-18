const inputEl = document.querySelector("#name-input");

const textEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (inputEl.value === "") {
    textEl.textContent = "Anonymous";
  } else {
    textEl.textContent = event.currentTarget.value;
  }
}
