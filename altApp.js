let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundWinner = "";

const rockIcon = document.getElementById("rockIcon");
const paperIcon = document.getElementById("paperIcon");
const scissorsIcon = document.getElementById("scissorsIcon");
let pScore = document.getElementById("player-score");
let cScore = document.getElementById("computer-score");

// paperIcon.addEventListener("click", playRound("ROCK"));
// rockIcon.addEventListener("click", playRound("PAPER"));
// scissorsIcon.addEventListener("click", playRound("SCISSORS"));

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  roundWinner = "";
  pScore.innerHTML = '<img src="./assets/zero.png" alt="player score" />';
  cScore.innerHTML = '<img src="./assets/zero.png" alt="computer score" />';
}

function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);
  switch (computerSelection) {
    case 0:
      return "paper";
    case 1:
      return "rock";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection) {
  for (let i = 0; i <= 5; i++) {
    const computerSelection = getComputerChoice().toUpperCase();
    if (playerSelection == computerSelection) {
      roundWinner = "tie";
    } else if (
      (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
      (playerSelection == "SCISSORS" && computerSelection == "PAPER") ||
      (playerSelection == "PAPER" && computerSelection == "ROCK")
    ) {
      roundWinner = "player";
    } else if (
      (computerSelection == "ROCK" && playerSelection === "SCISSORS") ||
      (computerSelection == "SCISSORS" && playerSelection === "PAPER") ||
      (computerSelection == "PAPER" && playerSelection === "ROCK")
    ) {
      roundWinner = "computer";
    }
    switch (roundWinner) {
      case "tie":
        tieScore++;
        console.log("tie");
        break;
      case "player":
        playerScore++;
        console.log("player");
        break;
      case "computer":
        computerScore++;
        console.log("comp");
        break;
    }
  }
}
