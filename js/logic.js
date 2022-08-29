const options = ["Lapis", "Papyrus", "Scalpellus"];

let player = {
  points: 0,
  currentChoice: options[computerChooses()],
};
let computer = {
  points: 0,
  choice: options[computerChooses()],
};
function computerChooses() {
  return Math.floor(Math.random() * 3);
}

let displayMessage;
function compareChoices(playerChoice, computerChoice) {
  if (computerChoice === playerChoice) {
    displayMessage = "Game Draw.";
  } else if (computerChoice === options[0] && playerChoice !== options[1]) {
    displayMessage = `The computer wins! The player chose ${playerChoice} and the computer chose ${computerChoice}.`;
    computer.points += 5;
  } else if (computerChoice === options[1] && playerChoice !== options[2]) {
    displayMessage = `The computer wins! The player chose ${playerChoice} and the computer chose ${computerChoice}.`;
    computer.points += 5;
  } else if (computerChoice === options[2] && playerChoice !== options[0]) {
    displayMessage = `The computer wins! The player chose ${playerChoice} and the computer chose ${computerChoice}.`;
    computer.points += 5;
  } else {
    displayMessage = `The player wins! The player chose ${playerChoice} and the computer chose ${computerChoice}.`;
    player.points += 5;
  }
}
function updateMessage() {
  document.querySelector(
    "p"
  ).innerText = `Player: ${player.points} \t Computer: ${computer.points}`;
}

let buttons = document.querySelectorAll(".play");
for (let index = 0; index < buttons.length; index++) {
  const element = buttons[index];
  let i = element.getAttribute("value");
  element.addEventListener("click", () => {
    player.currentChoice = options[i];
    computer.choice = options[computerChooses()];
    compareChoices(player.currentChoice, computer.choice);
    document.querySelector("#display-message").innerText = displayMessage;
    updateMessage();
  });
  
}
function resetPoints() {
    player.points = 0;
    computer.points = 0;
    updateMessage();
}
document.querySelector("#reset").addEventListener('click',resetPoints);
