// Pseudo Code

// Clock needs to get exact time for the person location
// button that changes to the 12 hour format and 24 hour format
// date sets according to the person location

// Elements selection 

const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggleBtn = document.getElementById('toggleFormat');

// clock function

function clock() {
  // variables
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // format with 2 digits

  if (twelveHour) {
    hours = hours % 12 === 0 ? 12 : hours % 12;
    let period = hours >= 12 ? "AM" : "PM";
    timeEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`
  } else {
    timeEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }
};

// date function

function date() {
  // variables
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // format
  dateEl.textContent = `${day}/${month}/${year}`
};

// Switch toggle

let twelveHour = false;

// toggle button

toggleBtn.addEventListener('click', () => {
  twelveHour = !twelveHour
})

date();
clock();
setInterval(clock, 1000);
