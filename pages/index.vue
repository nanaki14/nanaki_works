<template>
  <section class="Container">
    <div class="WorksUnit">
      <WorkItem v-for="work in works" :key="work.thumb" :thumb="work.thumb" :link="work.link" />
    </div>
  </section>
</template>

<script>
import { TweenMax, Power3 } from 'gsap'
import WorkItem from '~/components/molecules/WorkItem'
import works from '~/assets/javascript/works'

export default {
  components: {
    WorkItem
  },
  computed: {
    works() {
      return works
    }
  },
  transition: {
    async enter(el, done) {
      const loadImage = src => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.onload = () => resolve(img)
          img.onerror = e => reject(e)
          img.src = src
        })
      }
      const isMobile = window.matchMedia(`screen and (max-width: ${767}px)`)
        .matches

      TweenMax.staggerFromTo(
        '.WorkItem',
        0,
        {
          y: 0,
          opacity: 1
        },
        {
          y: 30,
          opacity: 0,
          ease: Power3.easeOut
        },
        0
      )

      await Promise.all([
        loadImage('/images/noise_color_thumb.png?190531'),
        loadImage('/images/lorem_thumb.png?190531'),
        loadImage('/images/noise_motion_thumb.png?190531'),
        loadImage('/images/path_glitch_thumb.png?190531'),
        loadImage('/images/path_motion_thumb.png?190531'),
        loadImage('/images/triangle_animation_thumb.png?190531'),
        loadImage('/images/circle_animation_thumb.png?190531'),
        loadImage('/images/shape_anim_thumb.png?190531'),
        loadImage('/images/shape_motion_thumb.png?190531')
      ]).then(async () => {
        await this.$delay(500)
        TweenMax.staggerFromTo(
          '.WorkItem',
          0.8,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            ease: Power3.easeOut
          },
          isMobile ? 0.05 : 0.03,
          () => {
            done()
          }
        )
      })
    },
    leave(el, done) {
      const isMobile = window.matchMedia(`screen and (max-width: ${767}px)`)
      TweenMax.staggerTo(
        '.WorkItem',
        0.8,
        {
          y: -30,
          opacity: 0,
          ease: Power3.easeOut
        },
        isMobile ? 0.05 : 0.03,
        () => {
          done()
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.Container {
  padding: 120px 0 40px;
  @media (max-width: $s-width - 1px) {
    padding: 80px 0 40px;
  }
}
.WorksUnit {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  @media (min-width: $s-width) and (max-width: $m-width) {
    justify-content: space-between;
  }
  > * {
    width: 30%;
    margin: 0 0 5% 5%;
    @media (min-width: $s-width) and (max-width: $m-width) {
      width: 47.5%;
      margin: 0 0 5%;
    }
    @media (max-width: $s-width - 1px) {
      width: 100%;
      margin: 0 0 5%;
    }
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
  }
}
</style>
