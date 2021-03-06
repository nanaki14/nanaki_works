export default class CursorMove {
  /**
   * constructor
   * @param {string} - ポインターのwrapperのクラス名
   * @param {string} - 内側のポインターのクラス名
   * @param {string} - 外側のポインターのクラス名
   * @param {string} - ホバー対象のリンク
   */

  constructor(params) {
    this.params = !params ? {} : params

    this.wrapperClass = !this.params.hasOwnProperty('wrapperClass')
      ? '.CorsorPointer'
      : params.wrapperClass
    this.cursorClass = !this.params.hasOwnProperty('cursorClass')
      ? '.CorsorPointer__dot'
      : this.params.cursorClass
    this.cursorOverClass = !this.params.hasOwnProperty('cursorOverClass')
      ? '.CorsorPointer__over'
      : this.params.cursorOverClass
    this.linkClass = !this.params.hasOwnProperty('linkClass')
      ? '.js-link'
      : this.params.linkClass

    this.visibleClass = 'is-visible'
    this.hideClass = 'is-hide'
    this.hoverClass = 'is-hover'
    this.activeClass = 'is-active'

    this.$wrapper = null
    this.$cursor = null
    this.$cursorOver = null
    this.$targetLink = null

    this.cursorActived = false
    this.cursorHover = false
    this.cursorShown = false

    this.breakpoint = 768
    this.delay = 8
    this.x = 0
    this.y = 0

    this.endX = 0
    this.endY = 0
  }

  init() {
    this.setup()

    this.setupEventListeners()
    this.animateMoveOver()
  }

  setup() {
    this.$wrapper = document.querySelector(this.wrapperClass)
    this.$cursor = document.querySelector(this.cursorClass)
    this.$cursorOver = document.querySelector(this.cursorOverClass)
    this.$targetLink = document.querySelectorAll(this.linkClass)

    this.endX = window.innerWidth / 2
    this.endY = window.innerHeight / 2
  }

  linkTargetSet() {
    this.$targetLink = document.querySelectorAll(this.linkClass)
    this.$targetLink.forEach(el => {
      el.addEventListener('mouseover', () => {
        this.cursorHover = true
        this.toggleCursorHover()
      })
      el.addEventListener('mouseout', () => {
        this.cursorHover = false
        this.toggleCursorHover()
      })
    })
  }

  setupEventListeners() {
    this.$targetLink.forEach(el => {
      el.addEventListener('mouseover', () => {
        this.cursorHover = true
        this.toggleCursorHover()
      })
      el.addEventListener('mouseout', () => {
        this.cursorHover = false
        this.toggleCursorHover()
      })
    })

    if (
      window.matchMedia(`screen and (max-width: ${this.breakpoint}px)`).matches
    ) {
      this.$wrapper.style.display = 'none'
    } else {
      this.$wrapper.style.display = 'block'
    }

    window.addEventListener('resize', () => {
      if (
        window.matchMedia(`screen and (max-width: ${this.breakpoint}px)`)
          .matches
      ) {
        this.$wrapper.style.display = 'none'
      } else {
        this.$wrapper.style.display = 'block'
      }
    })

    // Click events
    document.addEventListener('mousedown', () => {
      this.cursorActived = true
      this.toggleCursorActive()
    })
    document.addEventListener('mouseup', () => {
      this.cursorActived = false
      this.toggleCursorActive()
    })
    document.addEventListener('mousemove', e => {
      // Show the cursor
      this.cursorShown = true
      this.toggleCursorShown()
      this.handlePosition(e)
    })
    document.addEventListener('mouseenter', () => {
      this.cursorShown = true
      this.toggleCursorShown()
    })
    document.addEventListener('mouseleave', () => {
      this.cursorShown = false
      this.toggleCursorShown()
    })
  }

  handlePosition(event) {
    this.endX = event.clientX
    this.endY = event.clientY
    this.$cursor.style.top = this.endY + 'px'
    this.$cursor.style.left = this.endX + 'px'
  }

  animateMoveOver() {
    this.x += (this.endX - this.x) / this.delay
    this.y += (this.endY - this.y) / this.delay
    this.$cursorOver.style.top = this.y + 'px'
    this.$cursorOver.style.left = this.x + 'px'

    requestAnimationFrame(this.animateMoveOver.bind(this))
  }

  toggleCursorShown() {
    if (this.cursorShown) {
      this.$cursorOver.classList.remove(this.hideClass)
      this.$cursor.classList.remove(this.hideClass)
      this.$cursorOver.classList.add(this.visibleClass)
      this.$cursor.classList.add(this.visibleClass)
    } else {
      this.$cursorOver.classList.remove(this.visibleClass)
      this.$cursor.classList.remove(this.visibleClass)
      this.$cursorOver.classList.add(this.hideClass)
      this.$cursor.classList.add(this.hideClass)
    }
  }

  toggleCursorHover() {
    if (this.cursorHover) {
      this.$cursorOver.classList.add(this.hoverClass)
    } else {
      this.$cursorOver.classList.remove(this.hoverClass)
    }
  }

  toggleCursorActive() {
    if (this.cursorActived) {
      this.$cursorOver.classList.add(this.activeClass)
    } else {
      this.$cursorOver.classList.remove(this.activeClass)
    }
  }
}
