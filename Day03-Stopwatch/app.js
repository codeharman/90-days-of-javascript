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
const saveIntervals = document.getElementById('save-intervals');

// function for the stopwatch

let startTimer = 0;

function start() {
  setInterval( () => {
  startTimer += 1
  stopWatchTimer.textContent = startTimer;
  }, 1000)
};



startBtn.addEventListener('click', start)