let choice = ['ROCK', 'PAPER', 'SCISSORS'] //STORE choice AS ARRAY WITH ['rock', 'paper', 'scissors']
function getComputerChoice() { //BEGIN getComputerChoice
  let computerChoice = Math.floor(Math.random() * choice.length);//  SET computerChoice WITH ROUND DOWN OF RANDOMIZED NUMBER FROM 0.0 TO 1.0 WITH MAX RANGE OF choice LENGTH
  return choice[computerChoice];//  DISPLAY choice[computerChoice]
}


function playRound(playerSelection) {//BEGIN playRound WITH PARAMETER playerSelection, computerSelection
  let computerSelection = getComputerChoice();
  if (playerSelection  === computerSelection){//IF playerSelection === computerSelection 
    document.getElementById('singleResult').innerHTML = (`It's a stalemate between A ${playerSelection} and A ${computerSelection}`);
    console.log(`It's a stalemate between A ${playerSelection} and A ${computerSelection}`);
    console.log(`player ${playerScore} com ${computerScore}`);
    return 'Tie!';//DISPLAY 'Tie!'
  } else if (
          (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||//ELSE IF playerSelection === 'rock' AND computerSelection === 'scissors' OR
          (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
          (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    playerScore++
    document.getElementById('singleResult').innerHTML = (`Player's ${playerSelection} demolished Computer's ${computerSelection}`);
    console.log(`Player ${playerSelection} Computer ${computerSelection} Player Win`);
    console.log(`player ${playerScore} com ${computerScore}`);
    return 'Player Win!'//DISPLAY 'Player Win!'
  } else {
    computerScore++ ;
    document.getElementById('singleResult').innerHTML = (`Player's ${playerSelection} is crushed by Computer's ${computerSelection}`)
    console.log(`Player ${playerSelection} Computer ${computerSelection} Player Lose`);
    console.log(`player ${playerScore} com ${computerScore}`);
    return 'Player Lose!' //DISPLAY 'Player Lose!'
  }
  for (let i = 0; i < 5; i++) {
    if ((playerScore > computerScore)&&(playerScore == 5)) {
      document.getElementById('finalResult').innerHTML = (`Player WIN with ${playerScore}-${computerScore} Score`);
    } else if (playerScore < computerScore && computerScore == 5) {
      document.getElementById('finalResult').innerHTML = (`Computer WIN with ${playerScore}-${computerScore} Score`);
    }
  }
 } //END IF

const rockBtn = document.getElementById("rockBtn");
const paperButn= document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

rockBtn.addEventListener("click", function() {
    playRound("ROCK");
});

paperBtn.addEventListener("click", function() {
    playRound("PAPER");
});

scissorsBtn.addEventListener("click", function() {
    playRound("SCISSORS");
});
let playerScore = 0 ;
let computerScore = 0 ;

document.getElementById('playerScore').innerHTML = (`Player Score is ${playerScore}`);
document.getElementById('computerScore').innerHTML = (`Computer Score is ${computerScore}`);
console.log(`player ${playerScore} com ${computerScore}`);
/*
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
*/
