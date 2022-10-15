let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundWinner = "";

const rockIcon = document.getElementById("rockIcon");
const paperIcon = document.getElementById("paperIcon");
const scissorsIcon = document.getElementById("scissorsIcon");
const resetButton = document.getElementById("reset-button");
let pScore = document.getElementById("player-score");
let cScore = document.getElementById("computer-score");
let roundResult = document.getElementById("roundWinner");
let roundResultIcon = document.getElementById("win-or-lose");

//watches for see is paper rock or scissors is clicked then run the playRound function and passes paper rock or scissor as the argument.
rockIcon.addEventListener("click", function () {
  playRound("ROCK");
});
paperIcon.addEventListener("click", function () {
  playRound("PAPER");
});
scissorsIcon.addEventListener("click", function () {
  playRound("SCISSORS");
});

//watches for mouse click to reset scores and scoreboard down to zero
resetButton.addEventListener("click", resetGame);

//reset scores to zero as well as scoreboard
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  roundWinner = "";
  pScore.innerHTML = '<img src="./assets/zero.png" alt="player score" />';
  cScore.innerHTML = '<img src="./assets/zero.png" alt="computer score" />';
  roundResultIcon.innerHTML = "<img src='./assets/boxing.png' alt='boxing' />";
}

//random number generator that assign paper rock or scissors to computer
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
      roundResult.innerHTML = "<h1><center>ITS A TIE!</center></h1>";
      roundResultIcon.innerHTML = "<img src='./assets/tie.png' alt='tie' />";
      break;
    case "player":
      playerScore++;
      roundResult.innerHTML = "<h1><center>YOU WIN!</center></h1>";
      roundResultIcon.innerHTML =
        "<img src='./assets/alien.png' alt='alien' />";
      break;
    case "computer":
      computerScore++;
      roundResult.innerHTML = "<h1><center>COMPUTER WINS!</center></h1>";
      roundResultIcon.innerHTML =
        "<img src='./assets/skull.png' alt='skull' />";
      break;
  }

  //display icon with player score.
  switch (playerScore) {
    case 1:
      pScore.innerHTML = '<img src="./assets/one.png" alt="computer score" />';
      break;
    case 2:
      pScore.innerHTML = '<img src="./assets/two.png" alt="computer score" />';
      break;
    case 3:
      pScore.innerHTML =
        '<img src="./assets/three.png" alt="computer score" />';
      break;
    case 4:
      pScore.innerHTML = '<img src="./assets/four.png" alt="computer score" />';
      break;
    case 5:
      pScore.innerHTML = '<img src="./assets/five.png" alt="computer score" />';
      break;
  }

  //display icon with computer score.
  switch (computerScore) {
    case 1:
      cScore.innerHTML = '<img src="./assets/one.png" alt="computer score" />';
      break;
    case 2:
      cScore.innerHTML = '<img src="./assets/two.png" alt="computer score" />';
      break;
    case 3:
      cScore.innerHTML =
        '<img src="./assets/three.png" alt="computer score" />';
      break;
    case 4:
      cScore.innerHTML = '<img src="./assets/four.png" alt="computer score" />';
      break;
    case 5:
      cScore.innerHTML = '<img src="./assets/five.png" alt="computer score" />';
      break;
  }
}
