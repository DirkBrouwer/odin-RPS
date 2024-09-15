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

console.log(`The computer chose ${getComputerChoice()}`);

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
    let humanChoice = prompt("Please choose between rock, paper or scissors");
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

console.log(`The human chose ${getHumanChoice()}`);

/*
PSEUDOCODE

Step 3: Declare the players score variables

1. Set computer score to zero
2. Set human score to zero
*/

let computerScore = 0;
let humanScore = 0;
