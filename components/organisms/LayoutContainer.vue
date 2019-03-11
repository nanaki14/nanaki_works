<template>
  <div ref="wrapper" class="LayoutConatiner">
    <Logo />
    <slot />
    <CorsorPointer />
  </div>
</template>

<script>
import { throttle } from 'throttle-debounce'
import CorsorPointer from '@/components/utils/CorsorPointer'
import Logo from '@/components/atoms/Logo'
export default {
  name: 'LayoutContainer',
  components: { CorsorPointer, Logo },
  mounted() {
    window.addEventListener('load', () => {
      this.setContainerHeight()
    })
    window.addEventListener(
      'resize',
      throttle(200, () => {
        this.setContainerHeight()
      })
    )
  },
  methods: {
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
    left: 24px;
  }
}
</style>
