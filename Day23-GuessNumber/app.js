const input = document.getElementById('input');
const button = document.querySelector('.button');
const result = document.querySelector('.result');
const restart = document.querySelector('.restart')

randomNumber = Math.floor(Math.random() * 11);

function test() {
  inputNumber = Number(input.value);
  if (inputNumber === randomNumber) {
    result.textContent = `Contrats you won the ${inputNumber} matched ${randomNumber}`
  } else {
    result.textContent = `You lose the random number was ${randomNumber}`
  }
}

restart.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 11); // new random number
  input.value = ""; // clear input
  result.textContent = ""; // clear result
})

button.addEventListener('click', test)