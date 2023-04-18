const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Будь ласка, заповніть всі поля!");
  }
  const allInputValues = {
    email: email.value,
    password: password.value,
  };
  console.log(allInputValues);

  const formData = new FormData(event.currentTarget);
  formEl.reset();
}
