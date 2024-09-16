/*
PSEUDOCODE

Step 1: Write the logic to get the computer choice

1. Generate a random number

2. Limit random number to three different values: 1, 2 or 3

3. Return either "rock", "paper" or "scissors", depending on the random number
*/

function getComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * 3);

  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

/*
PSEUDOCODE

Step 2: Write the logic to get the human choice

1. Prompt the user to enter one of three options: "rock", "paper" or "scissors"

2. If user input is not a valid choice, inform user about invalid input and prompt user again until valid choice is entered.

3. Return human choice
*/

function getHumanChoice() {
  let inputValid = false;

  do {
    let humanChoice = prompt("Please pick either rock, paper or scissors");
    if (humanChoice !== null) humanChoice = humanChoice.toLowerCase();

    if (
      humanChoice !== "rock" &&
      humanChoice !== "paper" &&
      humanChoice !== "scissors"
    )
      continue;

    return humanChoice;
  } while (!inputValid);
}

/*
PSEUDOCODE

Step 3: Declare the players score variables

1. Set computer score to zero
2. Set human score to zero
*/

let computerScore = 0;
let humanScore = 0;

/*
PSEUDOCODE

Step 4: Write the logic to play a single round

1. Compare computer choice with human choice
2. If one beats the other, declare the round winner. If computer choice is equal to human choice, show message saying it's a draw
3. If computer wins, add one to computer score. If human wins, add one to human score. If it's a draw, don't add anything to either scores
*/

function playRound(computerChoice, humanChoice) {
  const loseMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
  const winMessage = `You win! ${humanChoice} beats ${computerChoice}`;

  if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log(loseMessage);
    computerScore++;
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    console.log(winMessage);
    humanScore++;
  } else if (computerChoice < humanChoice) {
    console.log(loseMessage);
    computerScore++;
  } else if (computerChoice > humanChoice) {
    console.log(winMessage);
    humanScore++;
  } else {
    console.log(`It's a draw! You both chose ${humanChoice}`);
  }
  console.log(`Computer score: ${computerScore}`);
  console.log(`Human score: ${humanScore}`);
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
