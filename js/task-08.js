const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("You cannot leave any of the fields empty.");
  }
  const credentialsProvided = {
    email: email.value,
    password: password.value,
  };

  console.log(credentialsProvided);
  formEl.reset();
}
formEl.addEventListener("submit", handleSubmit);
