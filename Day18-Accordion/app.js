const button = document.getElementsByClassName('button');

for ( let i = 0; i < button.length; i++ ) {
  button[i].addEventListener('click', function() {
    this.classList.toggle('active');

    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none'
    } else {
      panel.style.display = 'block'
    }
  })
}
