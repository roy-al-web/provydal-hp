document.addEventListener('DOMContentLoaded', () => {
  const ORDER = [
    'real-estate-platform.png',
    'corporate-site.png',
    'ai-minutes-system.png',
    'line-ec-system.png',
  ]

  const ORDER_MAP = new Map(ORDER.map((name, i) => [name, i]))

  const getCardKey = (card) => {
    const img = card.querySelector('img')
    const src = img?.getAttribute('src') || ''
    return ORDER.find((name) => src.includes(name)) || ''
  }

  document.querySelectorAll('.works-cv-sec, .works-cv-page').forEach((section) => {
    const viewport = section.querySelector('.works-cv__viewport')
    const track = section.querySelector('.works-cv__track')
    if (!viewport || !track) return

    let wrap = section.querySelector('.works-cv')
    if (!wrap) {
      wrap = document.createElement('div')
      wrap.className = 'works-cv works-cv-wrap'
      viewport.parentNode.insertBefore(wrap, viewport)
      wrap.appendChild(viewport)
    } else {
      wrap.classList.add('works-cv-wrap')
    }

    // 順番固定
    const cards = [...track.children].sort((a, b) => {
      const ka = ORDER_MAP.get(getCardKey(a)) ?? 999
      const kb = ORDER_MAP.get(getCardKey(b)) ?? 999
      return ka - kb
    })

    track.innerHTML = ''
    cards.forEach((card) => {
      card.style.pointerEvents = 'none'
      card.querySelectorAll('a, button').forEach((el) => {
        el.style.pointerEvents = 'none'
      })
      card.setAttribute('draggable', 'false')
      track.appendChild(card)
    })

    // 右端・左端の大きい矢印を自動追加
    const ensureEdge = (cls, label, arrow) => {
      let btn = wrap.querySelector('.' + cls)
      if (!btn) {
        btn = document.createElement('button')
        btn.type = 'button'
        btn.className = 'works-cv__edge ' + cls
        btn.setAttribute('aria-label', label)
        btn.innerHTML = `<span>${arrow}</span>`
        wrap.appendChild(btn)
      }
      return btn
    }

    const prevEdge = ensureEdge('works-cv__edge--prev', '前へ', '←')
    const nextEdge = ensureEdge('works-cv__edge--next', '次へ', '→')

    const prevBtns = [...section.querySelectorAll('[data-dir="prev"]'), prevEdge]
    const nextBtns = [...section.querySelectorAll('[data-dir="next"]'), nextEdge]

    const getGap = () => parseFloat(getComputedStyle(track).gap || '0')

    const getStep = () => {
      const first = track.querySelector('.works-cv__card')
      if (!first) return 0
      return first.getBoundingClientRect().width + getGap()
    }

    const normalizeLoop = () => {
      const step = getStep()
      if (!step) return

      while (viewport.scrollLeft >= step) {
        const first = track.firstElementChild
        if (!first) break
        track.appendChild(first)
        viewport.scrollLeft -= step
      }

      while (viewport.scrollLeft <= 0) {
        const last = track.lastElementChild
        if (!last) break
        track.insertBefore(last, track.firstElementChild)
        viewport.scrollLeft += step
      }
    }

    requestAnimationFrame(() => {
      viewport.scrollLeft = 1
    })

    const move = (dir) => {
      const step = getStep()
      if (!step) return
      viewport.scrollBy({ left: step * dir, behavior: 'smooth' })
      setTimeout(normalizeLoop, 380)
    }

    prevBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        move(-1)
      })
    })

    nextBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        move(1)
      })
    })

    // 右にドラッグしたら次へ
    let isDown = false
    let startX = 0
    let startScrollLeft = 0

    viewport.addEventListener('mousedown', (e) => {
      isDown = true
      startX = e.pageX
      startScrollLeft = viewport.scrollLeft
      viewport.classList.add('is-dragging')
    })

    window.addEventListener('mouseup', () => {
      if (!isDown) return
      isDown = false
      viewport.classList.remove('is-dragging')
      normalizeLoop()
    })

    viewport.addEventListener('mouseleave', () => {
      if (!isDown) return
      isDown = false
      viewport.classList.remove('is-dragging')
      normalizeLoop()
    })

    viewport.addEventListener('mousemove', (e) => {
      if (!isDown) return
      e.preventDefault()
      const walk = e.pageX - startX
      viewport.scrollLeft = startScrollLeft + walk
      normalizeLoop()
    })

    viewport.addEventListener('touchend', () => {
      setTimeout(normalizeLoop, 120)
    }, { passive: true })
  })
})
