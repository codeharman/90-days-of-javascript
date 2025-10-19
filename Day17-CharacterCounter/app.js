// selector

const inputEl = document.querySelector('.input');
const button = document.querySelector('.button');
const renderEl = document.querySelector('.render');

button.addEventListener('click', result);

function result() {
  let charCounter = inputEl.value.length;
  renderEl.textContent = `How many characters?: ${charCounter}`
}