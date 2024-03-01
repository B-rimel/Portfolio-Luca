const formData = document.getElementById("form");

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputContent = document.getElementById("content");
const inputSend = document.getElementById("submit");
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

function isEmail() {
  return regex.test(inputEmail.content);
}

formData.addEventListener("submit", async (event) => {
  event.preventDefault();
  if ((inputName, inputEmail, inputContent && isEmail)) {
    const email = {
      name: inputName.value,
      email: inputEmail.value,
      content: inputContent.value,
    };
    console.log(email);
    fetch(`https://mail-a457.onrender.com`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indique que le corps de la requête est en format JSON
        "Access-Control-Allow-Origin": "https://lucacampagna.dev" // Spécifie le domaine autorisé (s'il s'agit de votre propre domaine)
      },
      body: email,
    }).then(formData.reset());
  } else {
    alert("Une erreur s'est produite lors de l'envoi de votre email");
  }
});

//Attribution d'un dataset id unique à chaque projet
const projectCards = document.querySelectorAll(".project-card");

let datasetId = 1;

for (const projectCard of projectCards) {
  const projectModal = projectCard.querySelector(".project-modal");
  projectCard.dataset.id = datasetId++;
}

//Affichage de la modale de projet au clic du projet

projectCards.addEventListener("click", () => {
  const projectModalWrapper = projectCard.querySelector(".project-modal-wrapper");
  projectModalWrapper.classList.toggle("show");
});
