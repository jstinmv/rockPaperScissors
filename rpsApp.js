//reset game resets score to zero
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundWinner = 0;
  pScore.innerHTML = '<img src="./assets/zero.png" alt="player score" />';
  cScore.innerHTML = '<img src="./assets/zero.png" alt="computer score" />';
}

let pScore = document.getElementById("player-score");
let cScore = document.getElementById("computer-score");
let playerScore = 0;
let computerScore = 0;

// creates a random number 0-2 and assigns given number to weapon with if statements
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) return "rock";
  else if (computerChoice == 1) return "paper";
  else if (computerChoice == 2) return "scissors";
  else {
    return "something went wrong. please try again.";
  }
}

//plays a round by comparing rock with the computerSelection and determining the winner with if statements.
const rockIcon = document.getElementById("rockIcon");
rockIcon.addEventListener("click", function (e) {
  function playRound(playerSelection, computerSelection) {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    if (computerSelection == "rock") {
      return "ITS A TIE NO ONE ";
    } else if (computerSelection == "scissors") {
      ++playerScore;
      return "PLAYER";
    } else if (computerSelection == "paper") {
      ++computerScore;
      return "COMPUTER";
    }
  }

  //display tells user who won the match of if it was a tie.
  let roundWinner = document.getElementById("roundWinner");
  roundWinner.innerHTML = `${playRound()} WINS!!`;
  if (playerScore == 5) {
    pScore.innerHTML = '<img src="./assets/five.png" alt="player score" />';
    alert("PLAYER WINS THE MATCH, GAME OVER!!");
  } else if (computerScore == 5) {
    cScore.innerHTML = '<img src="./assets/five.png" alt="computer score" />';
    alert("COMPUTER WINS THE MATCH, GAME OVER!!");
  }

  //switch statements to change the score on the scoreboard for the computer and player.
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
  }
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
  }
});

//plays a round by comparing paper with the computerSelection and determining the winner with if statements.
const paperIcon = document.getElementById("paperIcon");
paperIcon.addEventListener("click", function (e) {
  function playRound(playerSelection, computerSelection) {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    if (computerSelection == "paper") {
      return "ITS A TIE NO ONE ";
    } else if (computerSelection == "rock") {
      ++playerScore;
      return "PLAYER";
    } else if (computerSelection == "scissors") {
      ++computerScore;
      return "COMPUTER";
    }
  }

  //display tells user who won the match of if it was a tie.
  let roundWinner = document.getElementById("roundWinner");
  roundWinner.innerHTML = `${playRound()} WINS!!`;

  if (playerScore == 5) {
    pScore.innerHTML = '<img src="./assets/five.png" alt="player score" />';
    alert("PLAYER WINS THE MATCH, GAME OVER!!");
  } else if (computerScore == 5) {
    cScore.innerHTML = '<img src="./assets/five.png" alt="computer score" />';
    alert("COMPUTER WINS THE MATCH, GAME OVER!!");
  }

  //switch statements to change the score on the scoreboard for the computer and player.
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
  }
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
  }
});

//plays a round by comparing scissors with the computerSelection and determining the winner with if statements.
const scissorsIcon = document.getElementById("scissorsIcon");
scissorsIcon.addEventListener("click", function (e) {
  function playRound(playerSelection, computerSelection) {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    if (computerSelection == "scissors") {
      return "ITS A TIE NO ONE ";
    } else if (computerSelection == "paper") {
      ++playerScore;
      return "PLAYER";
    } else if (computerSelection == "rock") {
      ++computerScore;
      return "COMPUTER";
    }
  }

  //display tells user who won the match of if it was a tie.
  let roundWinner = document.getElementById("roundWinner");
  roundWinner.innerHTML = `${playRound()} WINS!!`;

  if (playerScore == 5) {
    pScore.innerHTML = '<img src="./assets/five.png" alt="player score" />';
    alert("PLAYER WINS THE MATCH, GAME OVER!!");
  } else if (computerScore == 5) {
    cScore.innerHTML = '<img src="./assets/five.png" alt="computer score" />';
    alert("COMPUTER WINS THE MATCH, GAME OVER!!");
  }

  //switch statements to change the score on the scoreboard for the computer and player.
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
  }
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
  }
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetGame);