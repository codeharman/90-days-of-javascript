// select elements

const inputEl = document.querySelector('.input');
const calculate = document.querySelector('.cal-btn');
const result = document.querySelector('.result');

// Logic

function render() {
  let calculateValue = parseFloat(inputEl.value);

  if (isNaN(calculateValue)) {
    result.textContent = `Please Enter valid number`
    return;
  }
  // Tips math
  let fivePer = calculateValue + (calculateValue * 0.05);
  let tenPer = calculateValue + (calculateValue * 0.10);
  let twelvePer = calculateValue + (calculateValue * 0.12);
  let fourteenPer = calculateValue + (calculateValue * 0.14);
  let fifteenPer = calculateValue + (calculateValue * 0.15);
  let eighteenPer = calculateValue + (calculateValue * 0.18);
  let twentyPer = calculateValue + (calculateValue * 0.20);
  let twentyFivePer = calculateValue + (calculateValue * 0.25);
  let thirtyPer = calculateValue + (calculateValue * 0.30);
  let fiftyPer = calculateValue + (calculateValue * 0.50)

result.textContent = 
  `
    Here are the following Tips

    For 5% the Total is: ${fivePer}
    For 10% the Total is: ${tenPer}
    For 12% the Total is: ${twelvePer}
    For 14% the Total is: ${fourteenPer}
    For 15% the Total is: ${fifteenPer}
    For 18% the Total is: ${eighteenPer}
    For 20% the Total is: ${twelvePer}
    For 25% the Total is: ${twentyFivePer}
    For 30% the Total is: ${thirtyPer}
    For 50% the Total is: ${fiftyPer}
  `
}

// Buttons

calculate.addEventListener('click', render)