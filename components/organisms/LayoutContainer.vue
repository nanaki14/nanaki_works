<template>
  <div ref="wrapper" class="LayoutConatiner">
    <Logo />
    <TheNav />
    <main class="MainContainer">
      <slot />
    </main>
    <div v-if="isCurtainShown" class="Curtain" />
    <CorsorPointer :isLoading="isLoading" />
  </div>
</template>

<script>
import { TweenMax, Power3 } from 'gsap'
import { mapGetters, mapActions } from 'vuex'
import CorsorPointer from '~/components/utils/CorsorPointer'
import Logo from '~/components/atoms/Logo'
import TheNav from '~/components/organisms/TheNav'

export default {
  name: 'LayoutContainer',
  components: { CorsorPointer, Logo, TheNav },
  data() {
    return {
      isCurtainShown: true
    }
  },
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
                return `${winWidth / 2 - 168 / 2 + index * 14 + 24}px`
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

        // Curtain
        TweenMax.to('.Curtain', 3, {
          x: -100,
          scaleX: 0,
          skewX: 10,
          ease: Power3.easeOut,
          onComplete: () => {
            this.isCurtainShown = false
          }
        })
      }
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
      await this.$delay(1000)
      this.endLoding()
    })
  },
  methods: {
    ...mapActions({
      endLoding: 'opening/endLoding'
    })
  }
}
</script>

<style lang="scss" scoped>
.LayoutConatiner {
  position: relative;
}
.MainContainer {
  padding: 0 48px 0 280px;
}
.Curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1;
  transform-origin: 0 50%;
}
</style>
