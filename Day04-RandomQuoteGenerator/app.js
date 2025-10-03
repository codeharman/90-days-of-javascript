// Pseudo Quote

// user comes to the website random quote comes up 
// user has option to toggle the quote

const display = document.getElementById('today-header')

// Toggle quote button

const toggleBtn = document.querySelector('.toggle');
toggleBtn.addEventListener('click', api);

// Random quote fetch function 

function api() {
    fetch('https://api.api-ninjas.com/v1/quotes', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'nafzdm0WVGd78eDyQ7tgsw==WBZi9gplpbkrvH3A'
  }
})
  .then(response => response.json())
  .then(data => {
    const quote = data[0].quote;
    const author = data[0].author;
    display.innerHTML = `${quote} <br><br> <b style="color: #b6deff">- ${author}</b>`
  })
  .catch(error => {
    display.innerHTML = `⚠️ Failed to load quote. Try again.`
    console.error("An error occurred:", error);
  })
};

// automatic quote when the page loads up

window.addEventListener('load', api)