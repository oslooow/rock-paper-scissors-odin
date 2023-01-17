//Algorithm
/*
  1. Get computer choice by randomizing
  2. Get player choice
  3. Compute a single game of rps
  4. Compute the winner of 5 set of tos game
*/

//Pseudocode

let choice = ['rock', 'paper', 'scissors'] //STORE choice AS ARRAY WITH ['rock', 'paper', 'scissors']
function getComputerChoice() { //BEGIN getComputerChoice
  let computerChoice = Math.floor(Math.random() * choice.length);//  SET computerChoice WITH ROUND DOWN OF RANDOMIZED NUMBER FROM 0.0 TO 1.0 WITH MAX RANGE OF choice LENGTH
  return choice[computerChoice];//  DISPLAY choice[computerChoice]
}


function playRound(playerSelection, computerSelection) {//BEGIN playRound WITH PARAMETER playerSelection, computerSelection
  if (playerSelection  === computerSelection){//IF playerSelection === computerSelection 
    console.log(`Player ${playerSelection} Computer ${computerSelection} TIE`);
    return 'Tie!';//DISPLAY 'Tie!'
  } else if (
          (playerSelection === 'rock' && computerSelection === 'scissors') ||//ELSE IF playerSelection === 'rock' AND computerSelection === 'scissors' OR
          (playerSelection === 'paper' && computerSelection === 'rock') ||
          (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`Player ${playerSelection} Computer ${computerSelection} Player Win`);
    return 'Player Win!'//DISPLAY 'Player Win!'
  } else {
    console.log(`Player ${playerSelection} Computer ${computerSelection} Player Lose`);
    return 'Player Lose!' //DISPLAY 'Player Lose!'
  }
 } //END IF

function game() {//BEGIN game
  let playerScore = 0 ;//STORE playerScore WITH 0
  let computerScore = 0 ;//STORE computerScore WITH 0
  for (let i=0; i < 5; i++) {//FOR i FROM 0 -5 INCREMENT BY 1
    let computerSelection = getComputerChoice(); //STORE computerSelection WITH getComputerChoice
    let playerSelection = prompt('Select: Rock, Paper or Scissors');//STORE playerSelection AS PROMPT WITH 'Select: Rock, Paper or Scissors'
    let result = playRound(playerSelection, computerSelection);//STORE result WITH playRound
    console.log(result);//DISPLAY result
    if (result.includes('Win')){//IF result INCLUDES 'Win'
      playerScore++;//playerScore INCREMENT BY 1
    } else if (result.includes('Lose')){//ELSE IF result INCLUDES 'Lose'
      computerScore++;//computerScore INCREMENT BY 1
    }
  }
  if (playerScore > computerScore) {//IF playerScore > computerScore
    console.log(`You beats the Robots with ${playerScore} - ${computerScore} Score!`);//DISPLAY 'You beats the Robots with playerScore - computerScore Score!'
  } else if (playerScore < computerScore) {//ELSE IF playerScore < computerScore
    console.log(`You have beaten by the Robots with ${playerScore} - ${computerScore} Score!`);//DISPLAY 'You have beaten by the Robots with playerScore - computerScore Score!'
  } else {ELSE
    console.log('Its a Tie!');//DISPLAY 'Its a tie!'
  }
}//END IF

game()//CALL game
