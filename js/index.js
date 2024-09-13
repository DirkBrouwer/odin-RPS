/*
PSEUDOCODE

Step 1: Write the logic to get the computer choice

1. Generate a random number
2. Limit random number to three different values: 1, 2 or 3
3. Return either "rock", "paper" or "scissors" depending on the random number
*/

function getComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * 3);
  console.log(`The random number is ${randomNumber}`);

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
