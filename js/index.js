const homeEl = document.querySelector('.home')

homeEl.addEventListener('click', function() {
  if (this.classList.contains('initial-state')) {
    this.classList.remove('initial-state')
    this.classList.add('visual-text-wrapper-show-state')
  }
})
