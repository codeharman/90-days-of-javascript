// selector

const inputEl = document.querySelector('.input');
const button = document.querySelector('.button');
const render = document.querySelector('.render');

// logic

button.addEventListener('click', renderEl);

function renderEl() {
  let text = inputEl.value.split('').reverse().join('');
  render.textContent = text
}