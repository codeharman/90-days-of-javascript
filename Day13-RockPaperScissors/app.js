// Selectors
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const userResult = document.querySelector('.user-result');
const computerResult = document.querySelector('.computer-result');
const result = document.querySelector('.result');

const userScoreEl = document.querySelector('.user-score');
const computerScoreEl = document.querySelector('.computer-score');

// variables

let choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

// Logic

function computerLogic(userChoice) {
  let computerChoice = choices[Math.floor(Math.random() * 3)]

  userResult.textContent = `Your Choice: ${userChoice}`
  computerResult.textContent = `Computer Choice: ${computerChoice}` 

  if (userChoice === computerChoice) {
    result.textContent = `Game is TIE`
  } else if (
    ( userChoice === 'rock' && computerChoice === 'scissors') ||
    ( userChoice === 'scissors' && computerChoice === 'paper') ||
    ( userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result.textContent = `You Win!!`
    userScore++
  } else {
    result.textContent = `You Lose :(`
    computerScore++
  }

  userScoreEl.textContent = `User Score: ${userScore}`;
  computerScoreEl.textContent = `Computer Score: ${computerScore}`;
}

rock.addEventListener('click', () => computerLogic('rock'))
paper.addEventListener('click', () => computerLogic('paper'))
scissors.addEventListener('click', () => computerLogic('scissors'))