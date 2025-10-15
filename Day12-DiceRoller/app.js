// selector

const input = document.getElementById('input');
const button = document.getElementById('roll');
const diceEl = document.querySelector('.dice-result');
const diceImg = document.querySelector('.dice-img')

// variables

let dice = [];
let image = [];

// function with the logic

function roller() {
  for (let i = 0; i < input.value; i++) {
    const value = Math.floor(Math.random() * 6) + 1 
    diceEl.textContent += `${value}, `
    diceImg.innerHTML += `<img src="images/${value}.png" alt="dice ${value}"></img>`
  }
}

button.addEventListener('click', roller)
