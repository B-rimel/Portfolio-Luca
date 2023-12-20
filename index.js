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
    fetch(`https://mail-a457.onrender.com/`, {
      method: "POST",
      body: email,
    }).then(formData.reset());
  } else {
    alert("Une erreur s'est produite lors de l'envoi de votre email");
  }
});

//Attribution d'un dataset id unique à chaque projet
const projectCards = document.querySelectorAll(".project-card");

for (const projectCard of projectCards) {
  let datasetId = 1;
  const projectModal = projectCard.querySelector(".project-modal");
  projectModal.dataset.projectid = datasetId;
  datasetId++;
  console.log(datasetId);
}

//Fermeture de la modale
function toggleShow(element) {
  element.classList.toggle("show");
}

const modal = document.querySelector(".project-modal");
const work = element;

// Au clic sur le close-button
modal.querySelector(".project-modal-control").addEventListener("click", () => {
  toggleShow(modal);
});

// Ou en dehors de l'élément
document.addEventListener("click", (event) => {
  if (!event.target.closest(".project-modal")) {
    toggleShow(modal);
  }
});
