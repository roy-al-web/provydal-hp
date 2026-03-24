import { initHero } from './hero.js'
import { initNav } from './nav.js'

document.addEventListener('DOMContentLoaded', () => {
  initHero(document.getElementById('hero-canvas-wrap'))
  initNav()
})
