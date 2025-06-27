// Variables to track score
let userScore = 0;
let computerScore = 0;
let drawScore = 0; 

const choices = ["Bat", "Ball", "Stump"];
const buttons = document.querySelectorAll(".choice-btn");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

// Sound elements
const winSound = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");
const drawSound = document.getElementById("drawSound");

// Logic to decide winner
function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) return "It's a Draw!";

  if (
    (userChoice === "Bat" && computerChoice === "Ball") ||
    (userChoice === "Ball" && computerChoice === "Stump") ||
    (userChoice === "Stump" && computerChoice === "Bat")
  ) {
    return "You Win!";
  } else {
    return "You Lose!";
  }
}

// Update score on screen
function updateScore(result) {
  if (result === "You Win!") userScore++;
  else if (result === "You Lose!") computerScore++;
  else{drawScore++};

  scoreDiv.innerText = `You: ${userScore} | Draw: ${drawScore} | Computer: ${computerScore}`;
}

// Handle button click
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const userChoice = btn.getAttribute("data-choice");
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const result = getResult(userChoice, computerChoice);

    resultDiv.innerText = `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;

    updateScore(result);

    // Play sounds
    if (result === "You Win!") {
      winSound.play();
    } else if (result === "You Lose!") {
      loseSound.play();
    }else{
        drawSound.play();
    }
  });
});

// Restart game function
restartBtn.addEventListener("click", () => {
  userScore = 0;
  drawScore = 0;
  computerScore = 0;
  scoreDiv.innerText = "You: 0 | Draw: 0 | Computer: 0";
  resultDiv.innerText = "";
});