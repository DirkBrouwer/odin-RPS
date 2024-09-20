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

Step 5: Write the logic to play the entire game

1. Play 5 rounds of rock, paper, scissors
2. After each round, add one to either the computer score or the human score, depending on the round winner.
3. After all rounds have been played, compare both scores to each other. Declare the one with the highest score winner of the entire game
*/

function playGame() {
  /*
PSEUDOCODE

Step 3: Declare the players score variables

1. Set human score to zero
2. Set computer score to zero
*/
  let humanScore = 0;
  let computerScore = 0;

  function updateScore(roundWinner, currentRound) {
    switch (roundWinner) {
      case "computer":
        computerScore++;
        break;
      case "human":
        humanScore++;
        break;
      default:
        break;
    }
    if (currentRound < 5)
      console.log(
        `Score after round ${currentRound}: \n Computer: ${computerScore} \n Human: ${humanScore}`
      );
  }

  function showFinalResult() {
    console.log(
      `***FINAL SCORE*** \n Computer: ${computerScore} \n Human: ${humanScore}`
    );

    if (humanScore > computerScore) {
      console.log("YOU WIN!");
    } else if (humanScore < computerScore) {
      console.log(`YOU LOSE!`);
    } else {
      console.log("It's a draw!");
    }
  }

  /*
PSEUDOCODE

Step 4: Write the logic to play a single round

1. Compare computer choice with human choice
2. If one beats the other, declare the round winner. If computer choice is equal to human choice, show message saying it's a draw
3. If computer wins, add one to computer score. If human wins, add one to human score. If it's a draw, don't add anything to either scores
*/

  function playRound(humanChoice, computerChoice) {
    const capitalizedHumanChoice =
      humanChoice[0].toUpperCase() + humanChoice.substring(1);
    const capitalizedComputerChoice =
      computerChoice[0].toUpperCase() + computerChoice.substring(1);

    const winMessage = `You win! ${capitalizedHumanChoice} beats ${capitalizedComputerChoice}`;
    const loseMessage = `You lose! ${capitalizedComputerChoice} beats ${capitalizedHumanChoice}`;

    let roundWinner;

    if (humanChoice === computerChoice) {
      console.log(`It's a draw! You both chose ${capitalizedHumanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(winMessage);
      roundWinner = "human";
    } else {
      console.log(loseMessage);
      roundWinner = "computer";
    }

    return roundWinner;
  }

  for (let currentRound = 1; currentRound < 6; currentRound++) {
    const roundWinner = playRound(getHumanChoice(), getComputerChoice());
    updateScore(roundWinner, currentRound);
  }

  showFinalResult();
}

playGame();
