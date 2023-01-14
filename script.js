// Function to randomly determine the computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to play a single round of rock paper scissors
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return 'Tie!';
    } else if (playerSelection === 'rock') {
      if (computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors';
      } else {
        return 'You Lose! Paper beats Rock';
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        return 'You Win! Paper beats Rock';
      } else {
        return 'You Lose! Scissors beats Paper';
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper';
      } else {
        return 'You Lose! Rock beats Scissors';
      }
    } else {
      return 'Invalid selection. Please choose rock, paper, or scissors.';
    }
  }
  
  // Function to play a 5 round game and report the winner or loser
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt('Make your selection: rock, paper, or scissors.');
      let computerSelection = getComputerChoice();
      let roundResult = playRound(playerSelection, computerSelection);
      console.log(roundResult);
      if (roundResult.includes('Win')) {
        playerScore++;
      } else if (roundResult.includes('Lose')) {
        computerScore++;
      }
    }
    if (playerScore > computerScore) {
      console.log('You Win!');
    } else if (playerScore < computerScore) {
      console.log('You Lose!');
    } else {
      console.log('Tie!');
    }
  }
  
  game();
  