const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // no se recargue la pagina
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (!email.trim() || !password) {
    alert("Por favor, rellene todos los campos");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
});
