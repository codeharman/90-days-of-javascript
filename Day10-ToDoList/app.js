// Pseudo Code

// user put the input data and click on the add button
// the tasks come at the checkbox and we can check it off once tasks are complete

// logic
// we put the data in the input-data and button add click 
// append the list in the task list with the checkbox
// clear button will clear the tasks

const inputEl = document.querySelector('.input-data');
const addBtn = document.querySelector('.add-btn');
const resultEl = document.querySelector('.result')
const deleteBtn = document.querySelector('.delete')

// logic

function render(event) {
  event.preventDefault();
  let inputData = inputEl.value;

  // creating the checkbox elements
  const container = document.createElement('div');
  container.classList.add('container')

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox'

  const list = document.createElement('span')
  list.textContent = inputData

  container.appendChild(checkbox)
  container.appendChild(list)

  resultEl.appendChild(container)
}

function refresh() {
  
  resultEl.innerHTML = ''
}

addBtn.addEventListener('click', render);
deleteBtn.addEventListener('click', refresh)