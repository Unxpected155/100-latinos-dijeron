const titulos = {
  1: "Mencione un milagro que realizó Jesús según la Biblia",
  2: " ¿Quién fue un seguidor o discípulo de Jesús?",
  3: "¿En qué lugar predicó Jesús?",
};

const respuestas = {
  1: {
    1: "Hola Mundo",
    2: "Bienvenido",
    3: "Adiós",
    4: "Laura",
    5: "Gabriel",
    6: "Jesus",
  },
  2: {
    1: "Paso 2: Respuesta 1",
    2: "Paso 2: Respuesta 2",
    3: "Paso 2: Respuesta 3",
    4: "Paso 2: Respuesta 4",
    5: "Paso 2: Respuesta 5",
    6: "Paso 2: Respuesta 6",
  },
  3: {
    1: "Paso 3: Respuesta 1",
    2: "Paso 3: Respuesta 2",
    3: "Paso 3: Respuesta 3",
    4: "Paso 3: Respuesta 4",
    5: "Paso 3: Respuesta 5",
    6: "Paso 3: Respuesta 6",
  },
};

let currentStep = 1;

document.addEventListener("keydown", function (event) {
  // Verificar si la tecla presionada es 1, 2, 3, 4, 5 o 6
  if (["1", "2", "3", "4", "5", "6"].includes(event.key)) {
    const cardId = `card-${event.key}`; // Por ejemplo, 'card-1'
    const card = document.getElementById(cardId);

    card.classList.toggle("flipped");

    const cardBack = card.querySelector(".card-back");

    if (card.classList.contains("flipped")) {
      cardBack.textContent = respuestas[currentStep][event.key];
    }
  }
});

function resetCards() {
  const cards = document.querySelectorAll(".card"); // Selecciona todas las cartas
  cards.forEach((card) => {
    card.classList.remove("flipped"); // Remueve la clase 'flipped' de todas las cartas
    const cardBack = card.querySelector(".card-back");
    cardBack.textContent = ""; // Limpia el contenido del reverso
  });
}
// Función para cambiar el step actual
function changeStep(newStep) {
  currentStep = newStep;
  const stepTitle = document.getElementById("step-title");
  stepTitle.textContent = titulos[currentStep];

  // Llamamos a resetCards para voltear todas las cartas antes de cambiar el step
  resetCards();
}

// Cambiar el paso usando las teclas de flecha
document.addEventListener("keydown", function (event) {
  if (
    event.key === "ArrowRight" &&
    currentStep < Object.keys(respuestas).length
  ) {
    changeStep(currentStep + 1); // Avanza un paso
  } else if (event.key === "ArrowLeft" && currentStep > 1) {
    changeStep(currentStep - 1); // Retrocede un paso
  }
});

window.onload = function () {
  const stepTitle = document.getElementById("step-title");
  stepTitle.textContent = titulos[1]; // Muestra "Título 1" al cargar la página
};
