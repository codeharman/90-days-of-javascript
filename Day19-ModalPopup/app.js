const button = document.getElementById('button');
const modal = document.querySelector('.main');
const close = document.querySelector('.close');

// logic

button.addEventListener('click', () => {
  modal.style.display = "flex";
})

close.addEventListener('click', () => {
  modal.style.display = "none"
})

