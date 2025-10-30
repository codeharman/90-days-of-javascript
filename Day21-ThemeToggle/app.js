const night = document.querySelector('.night');
const sun = document.querySelector('.sun');


night.addEventListener('click', () => {
  // body
  document.body.style.backgroundColor = "black"

  // Change all paragraph text to white
  document.querySelectorAll('p').forEach(p => {
    p.style.color = "white";
  })

  document.querySelectorAll('h1').forEach(header => {
    header.style.color = "#ee2e24"
  })
})

sun.addEventListener('click', () => {
  document.body.style.backgroundColor = "white"

  document.querySelectorAll('p').forEach(p => {
    p.style.color = "black"
  })
  
  document.querySelectorAll('h1').forEach(header => {
    header.style.color = "#5ea6e2"
  })
})