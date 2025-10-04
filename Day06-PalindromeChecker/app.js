// Pseudo Code

// Step 1: User enters a word in the input field and clicks the "Search" button.
// Step 2: Capture the input value as a string.

// Step 3: Reverse the string
//   - Initialize an empty string called reversedWord.
//   - Loop through the original word from the end to the start.
//   - Append each character to reversedWord.

// Step 4: Compare the original word and reversedWord.
//   - If they match, display "true" in the result area.
//   - Otherwise, display "false" in the result area.

// input

const input = document.getElementById('input');

// search button

const search = document.getElementById('search-btn');
search.addEventListener('click', checker)

// result 

const result = document.querySelector('.result');

// Input logic

function checker() {
  const values = input.value.toLowerCase();
  const reverse = values.split('').reverse().join('');
    if (values === reverse) {
      result.textContent = `✅ It's a palindrome!`;
    } else {
      result.textContent = `❌ Not a palindrome.`;
    }
};

