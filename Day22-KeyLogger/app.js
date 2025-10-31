const input = document.getElementById('input');
const result = document.querySelector('.result');

// Pseudo Code
// user put the word in the input
// and everytime the key hit the word comes in the span


// logic

input.addEventListener('keydown', (event) => {
  let inputData = event.key
  result.textContent = inputData
})