const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const dataLength = parseInt(inputEl.getAttribute("data-length"));
  if (inputEl.value.length === dataLength) {
    inputEl.style.borderColor = "#4caf50";
  } else {
    inputEl.style.borderColor = "#f44336";
  }
}
