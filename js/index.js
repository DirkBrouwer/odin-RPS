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

function playGame() {
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
