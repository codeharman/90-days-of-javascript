// Pseudo code

// stopwatch starting from the zero
// 4 buttons
// start button - to start the timer
// stop button - to stop the timer
// reset button - to reset timer to zero
// save button - to save the time interval
// all four buttons linking the timer
// save button represents at the bottom

// element referencing - done

const stopWatchTimer= document.getElementById('timer');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const saveBtn = document.getElementById('save-btn');
const saveIntervals = document.querySelector('.save-intervals');

// Stopwatch variables

let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

// Update Function display

function updateStopwatchDisplay() {
  stopWatchTimer.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// startBtn function

startBtn.addEventListener('click', timerWatch)

// Stopwatch function

function timerWatch() {
  if(!timer) {
    timer = setInterval(() => {
      seconds++
      if (seconds === 60) {
        seconds = 0;
        minutes++
        if (minutes === 60) {
          minutes = 0;
          hours++
        }
      }
     updateStopwatchDisplay()
    }, 1000)
  }
};

// Stop function

stopBtn.addEventListener('click', stopWatch);

function stopWatch() {
  clearInterval(timer)
  timer = null;
}

// Reset function

function resetWatch() {
  stopWatch()
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateStopwatchDisplay()
}

resetBtn.addEventListener('click', resetWatch)

// save function

function saveValue() {
  let saveStr = `${hours.toString().padStart(2, '0')}:` + 
                `${minutes.toString().padStart(2, '0')}:` + 
                `${seconds.toString().padStart(2, '0')}`;
  saveIntervals.innerHTML += `${saveStr} <br>`
}

saveBtn.addEventListener('click', saveValue)