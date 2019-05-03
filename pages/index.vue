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
    enter(el, done) {
      const isMobile = window.matchMedia(`screen and (max-width: ${767}px)`)
        .matches
      TweenMax.staggerFromTo(
        '.WorkItem',
        1.3,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          ease: Power3.easeOut
        },
        isMobile ? 0.08 : 0.03,
        () => {
          done()
        }
      )
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
