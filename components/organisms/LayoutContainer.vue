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
    isLoading: function(next, prev) {
      if (!next && prev) {
        const winWidth = window.innerWidth
        console.log(winWidth)
        TweenMax.staggerFromTo(
          '.Logo span',
          1.2,
          {
            left: `${winWidth / 2}px`,
            scale: 1.1,
            cycle: {
              x: -50,
              z: 5
            }
          },
          {
            scale: 1,
            cycle: {
              x: 0,
              z: 0,
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
  background-color: #e9e9e9;

  .Logo {
    position: absolute;
    top: 50%;
    left: 0;
  }
}
</style>
