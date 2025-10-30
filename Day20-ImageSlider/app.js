// buttons

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelectorAll('.slider');

let count = 0;

// container
// Pseudo code
// .slider is showing the picture
// when the person clicks on the > next emoji comes up
// when the user clicks on the < previous emoji comes up
// if the user reaches at the end nothing happense after that

// Image component

function image() {
  const container = document.querySelectorAll('.slider');
  for (let i = 0; i < container.length; i++) {

    // out put for the console.log was 0,1,2 that means for loop is working
    //  console.log(i)

    container[i].style.display = "none";
  } 
  container[count].style.display = "block";
}

// Calling to show the image
image()

// right button logic 

right.addEventListener('click', () => {
  if (count < container.length - 1) {
    count++;
    image()
  }
})

left.addEventListener('click', () => {
  if (count > 0) {
    count--
    image()
  }
})