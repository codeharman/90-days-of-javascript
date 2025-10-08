// Pseudo code

// user put data in age, weight and height input
// BMI gets calculated and gives you 1 of the 4 options
// - underweight - below 18.5
// - normal - 18.5 - 24.9
// - overweight - 25.0 - 29.9
// - obesity - 30.0+

// Logic 
// BMI formula = BMI = weight (kg) / [height (m)]² for the metric system
// measure the weight in kg
// measure the height in meter so 1 cm = 0.01 m
// square your height by multiplying itself eg 1.7m * 1.7m = 2.89m
// divide your weight: by the squared height to get the BMI


const weightEl = document.querySelector('.weight');
const heightEl = document.querySelector('.height');
const doneBtn = document.getElementById('done');
const resultEl = document.querySelector('.result');

// logic

function logic() {
  // let values
  let weight = parseFloat(weightEl.value);
  let height = parseFloat(heightEl.value);

  if (!weight || !height) {
    resultEl.textContent = 'Please enter valid weight and height!';
    return;
  }

  // height converter
  let newHeight = ((height * 0.01) ** 2);

  // BMI

  let result = weight / newHeight

  if (result <= 18.5) {
    resultEl.textContent = `Your BMI is ${result.toFixed(2)} (underweight)`;
  } else if (result <= 24.9) {
    resultEl.textContent = `Your BMI is ${result.toFixed(2)} (normal)`;
  } else if (result <= 29.9) {
    resultEl.textContent = `Your BMI is ${result.toFixed(2)} (overweight)`;
  } else {
    resultEl.textContent = `Your BMI is ${result.toFixed(2)} (obesity)`;
  }

  // Result here
  
}

doneBtn.addEventListener('click', logic)