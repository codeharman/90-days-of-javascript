// Pseudo Code

// user enter the number and click on the search
// user gets result in the p tag with the input number telling F and C

// Logic

// For C to F: F = (1.8 * C) + 32
// For F to C: C = 5/9 * (F - 32)

// Elements

const searchF = document.getElementById('search-f');
const searchC = document.getElementById('search-c');
const result = document.getElementById('result');
const inputEl = document.querySelector('.input');

// Logic

function temp(e) {

let newValue = parseFloat(inputEl.value)

if (isNaN(newValue)) {
   return result.textContent = `Please enter a valid number`
  }
    if (e.target.id === 'search-c') {
      let c = 5/9 * (newValue - 32);
        return result.textContent = `Celsius: ${c.toFixed(2)} or ${newValue} F`
    } else if (e.target.id === 'search-f') {
      let f = (1.8 * newValue) + 32;
      return result.textContent = `Fahrenheit: ${f.toFixed(2)} or ${newValue} C`
    }
}


searchC.addEventListener('click', temp)
searchF.addEventListener('click', temp)