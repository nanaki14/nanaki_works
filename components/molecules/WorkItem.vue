<template>
  <article ref="WorkItem" @mousemove="onMouseOver" @mouseleave="onMouseLeave" class="WorkItem">
    <a :href="link" target="_blank">
      <div ref="canvasWrapper" :style="`background-image: url(${thumb})`" class="WorkItem__Inner js-CanvasWrapper" />
    </a>
  </article>
</template>

<script>
import { TweenMax, Power3, Power2 } from 'gsap'
import { TextureLoader } from 'three'
import glsl from '~/mixins/glsl'

export default {
  name: 'WorkItem',
  mixins: [glsl],
  props: {
    thumb: {
      type: String,
      require: true,
      default: ''
    },
    link: {
      type: String,
      require: true,
      default: ''
    }
  },
  computed: {
    texture() {
      return {
        texture: {
          type: 't',
          value: new TextureLoader().load(this.thumb)
        }
      }
    }
  },
  async mounted() {
    const isMobile = window.matchMedia(`screen and (max-width: ${767}px)`)
      .matches
    if (!isMobile) {
      const container = this.$refs.canvasWrapper
      const frag = await require(`~/mixins/glsl/fragment.glsl`)
      const vert = await require(`~/mixins/glsl/vertex.glsl`)
      this.initCanvs(container, frag, vert, this.texture)
    }
  },
  methods: {
    onMouseOver(e) {
      const isMobile = window.matchMedia(`screen and (max-width: ${767}px)`)
        .matches
      if (!isMobile) {
        const domRect = this.$refs.WorkItem.getBoundingClientRect()
        const mouseX =
          ((e.clientX - domRect.left) / (domRect.right - domRect.left)) * 2.0 -
          1.0
        const mouseY =
          ((e.clientY - domRect.top) / (domRect.bottom - domRect.top)) * 2.0 -
          1.0
        TweenMax.to(this.$refs.WorkItem, 0.5, {
          scale: 1.08,
          x: `${mouseX * 15}px`,
          y: `${mouseY * 20}px`,
          ease: Power2.easeOut
        })
        this.mouseOver()
      }
    },
    onMouseLeave() {
      TweenMax.to(this.$refs.WorkItem, 0.5, {
        scale: 1,
        x: 0,
        y: 0,
        ease: Power3.easeOut
      })

      this.mouseLeave()
    }
  }
}
</script>

<style lang="scss" scoped>
.WorkItem {
  position: relative;
  box-shadow: 8px 8px 8px $color-black26;
  backface-visibility: hidden;
  transition: box-shadow ease 0.5s;
  &:hover {
    @media (min-width: $s-width) {
      box-shadow: 4px 4px 8px $color-black26;
    }
  }
  &:after {
    content: '';
    display: block;
    padding-bottom: (9 / 16 * 100%);
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__Inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: no-repeat center;
    background-size: cover;
  }
}
</style>
