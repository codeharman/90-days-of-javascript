// Pseudo Code

// User start typing inside the input
// words start getting counted in the p tag

// Logic
// The words are first split() and then
// each index is counted and reperents at the p tag

const input = document.getElementById('input-data');
const wordsCounted = document.querySelector('.counter');
const charsEl = document.querySelector('.characters')

// logic

function counter() {
  let words = input.value.trim();
  let splitWords = words === '' ? 0 : words.split(/\s+/).length;
  let chars = words.length;

  wordsCounted.textContent = `Words: ${splitWords}`;
  charsEl.textContent = `Characters: ${chars}`;
};

// Event Listener
input.addEventListener('input', counter);