const titulos = {
  1: "Mencione un milagro que realizó Jesús según la Biblia",
  2: "¿Quién fue un seguidor o discípulo de Jesús?",
  3: "¿En qué lugar predicó Jesús?",
  4: "Mencione algo qué llevó a cabo Jesús durante la Última Cena",
  5: "Mencione un objeto o símbolo que está asociado con la crucifixión de Jesús",
  6: "Mencione una parábola que enseñó Jesús",
  7: "Mencione algún mandamiento que mencionó Jesús",
  8: "Mencione alguna de las metáforas que usó Jesús para describir el Reino de Dios",
  9: "Mencione alguna de las personas que aparecen en la historia de la crucifixión de Jesús",
  10: "Mencione alguno de los nombres o títulos que se usan para referirse a Jesús en los Evangelios",
  11: "Mencione algún personaje de la Biblia que realizó milagros",
  12: "Mencione uno de los libros proféticos del Antiguo Testamento",
  13: "Mencione algún rey importante que se mencione en la Biblia",
  14: "Mencione una de las historias de la Biblia que tenga lugar en el desierto",
  15: "Mencione el nombre de una mujer que aparezca en la genealogía de Jesús",
  16: "Mencione una de las partes del fruto del Espíritu Santo",
  17: "Menciona una de las prácticas que son comunes en una vida devocional Cristiana",
  18: "Mencione alguno de los dones espirituales mencionados en la Biblia",
};

const respuestas = {
  1: {
    1: "Convertir el agua en vino",
    2: "Multiplicación panes y peces",
    3: "Resucitó a Lázaro",
    4: "Sanó a un ciego",
    5: "Diez Leprosos",
  },
  2: {
    1: "Juan",
    2: "Pedro",
    3: "Mateo",
    4: "Pablo",
    5: "Judas",
  },
  3: {
    1: "Galilea",
    2: "Capernaum",
    3: "Jerusalén",
    4: "Samaria",
    5: "Judea",
  },
  4: {
    1: "Lavar los pies de los discípulos",
    2: "Compartir el pan",
    3: "Copa de vino",
    4: "Bendecir",
    5: "Orar",
  },
  5: {
    1: "La cruz",
    2: "Corona de espinas",
    3: "Los clavos",
    4: "El manto",
    5: "Hiel",
  },
  6: {
    1: "El hijo pródigo",
    2: "La parábola del sembrador",
    3: "La del buen samaritano",
    4: "La parábola de los talentos",
    5: "La oveja perdida",
  },
  7: {
    1: "Ama a tu prójimo como a ti mismo",
    2: "Amar a Dios",
    3: "Amar al prójimo",
    4: "No matarás",
    5: "Hornar a tu padre y madre",
  },
  8: {
    1: "El grano de mostaza",
    2: "El tesoro escondido",
    3: "La levadura",
    4: "El camino ancho y estrecho",
    5: "La red para pescar",
  },
  9: {
    1: "Juan",
    2: "María",
    3: "Pilatos",
    4: "Simón de Cirene",
    5: "Los ladrones",
  },
  10: {
    1: "Hijo de Dios",
    2: "El Mesías",
    3: "El Hijo del Hombre",
    4: "El Salvador",
    5: "El Cristo",
  },
  11: {
    1: "Moisés",
    2: "Elías",
    3: "Pedro",
    4: "Jesús",
    5: "Pablo",
  },
  12: {
    1: "Daniel",
    2: "Isaías",
    3: "Ezequiel",
    4: "Jeremías",
    5: "Habacuc",
  },
  13: {
    1: "David",
    2: "Salomón",
    3: "Saúl",
    4: "Nabudoconosor",
    5: "Josías",
  },
  14: {
    1: "Tentación de Jesús",
    2: "Éxodo",
    3: "Cuando Dios da maná al pueblo de Israel",
    4: "Cuando el diablo tentó a Jesús",
    5: "Ayuno de Jesús",
  },
  15: {
    1: "María",
    2: "Rahab",
    3: "Rut",
    4: "Betsabé",
    5: "Tamar",
  },
  16: {
    1: "Amor",
    2: "Paz",
    3: "Paciencia",
    4: "Gozo",
    5: "Benignidad",
  },
  17: {
    1: "Oración",
    2: "Ayuno",
    3: "Lectura de la Biblia",
    4: "Adoración",
    5: "Congregarse",
  },
  18: {
    1: "Amor",
    2: "Ciencia",
    3: "Fe",
    4: "Discernimiento",
    5: "Don de lenguas",
  },
};

let currentStep = 1;

document.addEventListener("keydown", function (event) {
  if (["1", "2", "3", "4", "5", "6"].includes(event.key)) {
    const cardId = `card-${event.key}`;
    const card = document.getElementById(cardId);

    card.classList.toggle("flipped");

    const cardBack = card.querySelector(".card-back");

    if (card.classList.contains("flipped")) {
      cardBack.textContent = respuestas[currentStep][event.key];
    }
  }
});

function resetCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.remove("flipped");
    const cardBack = card.querySelector(".card-back");
    cardBack.textContent = "";
  });
}

function changeStep(newStep) {
  currentStep = newStep;
  const stepTitle = document.getElementById("step-title");
  stepTitle.textContent = titulos[currentStep];

  resetCards();
}

document.addEventListener("keydown", function (event) {
  if (
    event.key === "ArrowRight" &&
    currentStep < Object.keys(respuestas).length
  ) {
    changeStep(currentStep + 1);
  } else if (event.key === "ArrowLeft" && currentStep > 1) {
    changeStep(currentStep - 1);
  }
});

window.onload = function () {
  const stepTitle = document.getElementById("step-title");
  stepTitle.textContent = titulos[1];
};
