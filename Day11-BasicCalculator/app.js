// selector

const result = document.querySelector('.answer');

const escape = document.querySelector('.escape');
const clear = document.querySelector('.clear');
const percent = document.querySelector('.percent');
const divide = document.querySelector('.divide');

const multiply = document.querySelector('.multiply');

const minus = document.querySelector('.minus');

const plus = document.querySelector('.plus');

const point = document.querySelector('.point');
const equals = document.querySelector('.equals');

const num = document.querySelectorAll('.num');

// logic

// opeator

[percent, divide, multiply, minus, plus, point].forEach(ops => {
  ops.addEventListener('click', () => {
    result.textContent += ops.dataset.value;
  })
})

// number 

num.forEach(hello => {
  hello.addEventListener('click', () => {
    result.textContent += hello.dataset.value;
  })
})

// result

equals.addEventListener('click', () => {
  try {
  result.textContent = eval(result.textContent)
  } catch {
    result.textContent = "Error";
  }
})

// clear function

clear.addEventListener('click', () => {
  result.textContent = '';
})

// single clear function

escape.addEventListener('click', () => {
  result.textContent = result.textContent.slice(0, -1)
})