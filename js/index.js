const homeEl = document.querySelector('.home')
const scrollIndicator = document.querySelector('.scroll-indicator')
const worksEl = document.querySelector('.works')
const workEls = worksEl.querySelectorAll('.work')
const headingWrapper = document.querySelector('.heading-wrapper')
const discoverBtn = headingWrapper.querySelector('.heading-wrapper button')

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

    setTimeout(() => {
      headingWrapper.classList.add('hide')
      worksEl.classList.add('show')
    }, 2500)
  }
})

for (const workEl of workEls) {
  workEl.addEventListener('mouseenter', function() {
    for (const workEl of workEls) workEl.classList.add('zoom-out')
    this.classList.remove('zoom-out')
    this.classList.add('zoom-in')
  })
  workEl.addEventListener('mouseleave', function() {
    for (const workEl of workEls) workEl.classList.remove('zoom-out')
    this.classList.remove('zoom-in')
  })
}

document.documentElement.style.setProperty(
  '--clip-path-initial-scale',
  document.documentElement.clientWidth / 1440
)

document.documentElement.style.setProperty(
  '--clip-path-transform-scale',
  (document.documentElement.clientWidth / 1440) * 42
)

window.addEventListener('resize', function() {
  document.documentElement.style.setProperty(
    '--clip-path-initial-scale',
    document.documentElement.clientWidth / 1440
  )

  document.documentElement.style.setProperty(
    '--clip-path-transform-scale',
    (document.documentElement.clientWidth / 1440) * 42
  )
})
