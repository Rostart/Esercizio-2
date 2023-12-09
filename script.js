let score = 0;
const colors = ["ROSSO", "GIALLO", "VERDE", "ARANCIONE", "BLU", "ROSA"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateButtons() {
  const buttonsContainer = document.querySelector(".buttons");
  const shuffledColors = [...colors]; // Clono l'array per non alterare l'originale
  shuffle(shuffledColors);

  buttonsContainer.innerHTML = ""; // Rimuovo i bottoni esistenti

  shuffledColors.forEach((color) => {
    const button = document.createElement("button");
    button.id = color.toLowerCase();
    button.textContent = color;
    buttonsContainer.appendChild(button);
  });
}

function updateScore(clickedColor) {
  if (clickedColor === "blu") {
    score++;
  } else {
    score--;
  }
  document.getElementById("score").textContent = score;
}

function startTimer() {
  let time = 5;
  document.getElementById("timer").textContent = time;

  const timerInterval = setInterval(() => {
    time--;
    document.getElementById("timer").textContent = time;

    if (time === 0) {
      clearInterval(timerInterval);
      startTimer();
      updateButtons(); // Aggiorno i bottoni quando il timer arriva a 0
    }
    if (time === 5) {
      updateButtons(); // Aggiorno i bottoni quando il timer ritorna a 5 secondi
    }
  }, 1000);
}

document.querySelector(".buttons").addEventListener("click", (event) => {
  const clickedColor = event.target.id;
  if (clickedColor) {
    updateScore(clickedColor);
  }
});

updateButtons(); // Aggiornamento iniziale dei bottoni
startTimer();
