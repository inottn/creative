const homeEl = document.querySelector('.home')
const scrollIndicator = document.querySelector('.scroll-indicator')
const worksEl = document.querySelector('.works')
const discoverBtn = document.querySelector('.heading-wrapper button')

homeEl.addEventListener('click', function() {
  if (this.classList.contains('initial-state')) {
    this.classList.remove('initial-state')
    this.classList.add('visual-text-wrapper-show-state')

    setTimeout(() => {
      this.classList.remove('visual-text-wrapper-show-state')
      this.classList.add('shutters-hide-state')
    }, 300 + 1600)
  }
})

scrollIndicator.addEventListener('click', function() {
  if (homeEl.classList.contains('shutters-hide-state')) {
    homeEl.classList.remove('shutters-hide-state')
    homeEl.classList.add('creative-mask-show-state')

    setTimeout(() => {
      homeEl.classList.remove('creative-mask-show-state')
      homeEl.classList.add('heading-wrapper-show-state')
      worksEl.scrollTo(
        (worksEl.scrollWidth - document.documentElement.clientWidth) / 2,
        0
      )
    }, 500 + 4300)
  }
})

discoverBtn.addEventListener('click', function() {
  if (homeEl.classList.contains('heading-wrapper-show-state')) {
    homeEl.classList.remove('heading-wrapper-show-state')
    homeEl.classList.add('works-show-state')
  }
})
