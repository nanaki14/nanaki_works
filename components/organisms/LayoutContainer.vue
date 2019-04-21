<template>
  <div ref="wrapper" class="LayoutConatiner">
    <Logo />
    <main class="MainContainer">
      <slot />
    </main>
    <CorsorPointer :isLoading="isLoading" />
  </div>
</template>

<script>
import { TweenMax, Power3 } from 'gsap'
import { mapGetters, mapActions } from 'vuex'
import { throttle } from 'throttle-debounce'
import CorsorPointer from '@/components/utils/CorsorPointer'
import Logo from '@/components/atoms/Logo'
export default {
  name: 'LayoutContainer',
  components: { CorsorPointer, Logo },
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading'
    })
  },
  watch: {
    isLoading: async function(next, prev) {
      if (!next && prev) {
        const winWidth = window.innerWidth
        TweenMax.staggerFromTo(
          '.Logo span',
          1.5,
          {
            left: `${winWidth / 2}px`,
            scale: 3,
            opacity: 0,
            rotationX: 180,
            cycle: {
              y: function(index) {
                return `${Math.floor(Math.random() * 600 - 300)}px`
              },
              z: function(index) {
                return `${winWidth - Math.floor(Math.random() * 40 - 20)}px`
              },
              left: function(index) {
                return `${winWidth / 2 -
                  Math.floor(Math.random() * 600 - 300)}px`
              }
            }
          },
          {
            scale: 1,
            opacity: 1,
            rotationX: 0,
            rotationY: 360,
            rotationZ: 360,
            cycle: {
              y: '0px',
              z: '0px',
              left: function(index) {
                return `${winWidth / 2 - 154 / 2 + index * 14 + 24}px`
              },
              ease: Power3.easeInOut
            }
          },
          0.2
        )

        await this.$delay((1.5 + 0.3 * 12) * 1000)

        TweenMax.staggerTo(
          '.Logo span',
          1.2,
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            rotationZ: -360,
            cycle: {
              y: '0px',
              z: '0px',
              left: function(index) {
                return `${index * 14 + 24}px`
              },
              ease: Power3.easeInOut
            }
          },
          0.1
        )
      }
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
      this.setContainerHeight()
      await this.$delay(1000)
      this.endLoding()
    })
    window.addEventListener(
      'resize',
      throttle(200, () => {
        this.setContainerHeight()
      })
    )
  },
  methods: {
    ...mapActions({
      endLoding: 'opening/endLoding'
    }),
    setContainerHeight() {
      const height = window.innerHeight
      document.querySelector('.LayoutConatiner').style.minHeight = `${height}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.LayoutConatiner {
  position: relative;

  .Logo {
    position: absolute;
    top: 50%;
    left: 0;
  }
}
</style>
