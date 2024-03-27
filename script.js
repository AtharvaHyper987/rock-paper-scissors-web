function loadPaper() {
  let imageElement = document.getElementById("rps");
  imageElement.src = "http://clipart-library.com/img/878063.png";
  let userSelectionElement = document.getElementById("userSelection");
  userSelectionElement.innerText = "You Chose Paper";
  loadComputer("paper");
}

function loadRock() {
  let rockElement = document.getElementById("rps");
  rockElement.src = "http://clipart-library.com/img/1603226.png";
  let userSelectionElement = document.getElementById("userSelection");
  userSelectionElement.innerText = "You Chose Rock";
  loadComputer("rock");
}

function loadScissors() {
  let scissorsElement = document.getElementById("rps");
  scissorsElement.src =
    "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33656/scissors-stationery-clipart-md.png";
  let userSelectionElement = document.getElementById("userSelection");
  userSelectionElement.innerText = "You Chose Scissors";
  loadComputer("scissors");
}

function loadComputer(userPlayed) {
  let number = Math.random() * 3;
  number = Math.floor(number);

  let computerPlayed;

  if (number == 0) {
    let computerElement = document.getElementById("computer-rps");
    computerElement.src = "http://clipart-library.com/img/1603226.png"; // rock
    let computerElementSelection = document.getElementById("computerSelection");
    computerElementSelection.innerText = "You chose Rock";
    computerPlayed = "rock";
  }
  if (number == 2) {
    let computerElement = document.getElementById("computer-rps");
    computerElement.src = "http://clipart-library.com/img/878063.png"; // paper
    let computerElementSelection = document.getElementById("computerSelection");
    computerElementSelection.innerText = "You chose Paper";
    computerPlayed = "paper";
  }
  if (number == 1) {
    let computerElement = document.getElementById("computer-rps");
    computerElement.src =
      "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/33656/scissors-stationery-clipart-md.png"; // scissors
    let computerElementSelection = document.getElementById("computerSelection");
    computerElementSelection.innerText = "You chose Scissors";
    computerPlayed = "scissors";
  }

  checkWinner(userPlayed, computerPlayed);
}
function checkWinner(userPlayed, computerPlayed) {
  //logic
  let winnerElement = document.getElementById("winner");

  if (userPlayed == computerPlayed) {
    winnerElement.innerText = " Game Draw!";
  } else if (userPlayed == "rock" && computerPlayed == "scissors") {
    winnerElement.innerText = " Congratulations You win!";
  } else if (userPlayed == "rock" && computerPlayed == "paper") {
    winnerElemenet.innerText = "Sorry, You lose! Get it Next Time!";
  } else if (userPlayed == "paper" && computerPlayed == "scissors") {
    winnerElement.innerText = "Sorry, You lose! Get it Next Time!";
  } else if (userPlayed == "paper" && computerPlayed == "rock") {
    winnerElement.innerText = "Congratulations You win!";
  } else if (userPlayed == "scissors" && computerPlayed == "rock") {
    winnerElement.innerText = "Sorry, You lose! Get it next time!";
  } else if (userPlayed == "scissors" && computerPlayed == "paper") {
    winnerElement.innerText = "Congratulations You win!";
  }
}
