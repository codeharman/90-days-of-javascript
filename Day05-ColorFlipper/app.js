// Pseudo Code
// Random color come as you load website
// #ffffff Random characters will come at the color id
// toggle button to switch to the new color

// getelementsid()

const colorEl = document.getElementById('color');
const toggleBtn = document.getElementById('toggle-btn')

// Random color function

function randomColor() {
  let colorChar = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += colorChar[Math.floor(Math.random() * 16)]
  };
  colorEl.textContent = color;
  document.body.style.backgroundColor = color;
};

// toggle button

toggleBtn.addEventListener('click', randomColor)

// auto load when user visit the webstie

window.addEventListener('load', randomColor)