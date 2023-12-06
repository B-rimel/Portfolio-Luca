const formData = document.getElementById("form");

const inputName = document.getElementById("email");
const inputEmail = document.getElementById("email");
const inputContent = document.getElementById("content");

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

function isEmail() {
  return regex.test(inputEmail.content);
}
inputEmail.addEventListener("change", isEmail);
const validEmail = isEmail(inputEmail);

if ((inputName, inputEmail, inputContent && isEmail)) {
  const email = new FormData();
  email.append("name", inputName.content);
  email.append("email", inputEmail.content);
  email.append("content", inputContent);
  fetch(`lucacampagna.alwaysdata.net/mail`, {
    method: "POST",
    body: email,
  }).then(formData.reset());
} else {
  alert("Une erreur s'est produite lors de l'envoi de votre email");
}
