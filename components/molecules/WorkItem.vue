<template>
  <article class="WorkItem">
    <div ref="canvasWrapper" class="WorkItem__Inner js-CanvasWrapper" />
  </article>
</template>

<script>
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
    const container = this.$refs.canvasWrapper
    const frag = await require(`~/mixins/glsl/fragment.glsl`)
    const vert = await require(`~/mixins/glsl/vertex.glsl`)

    this.initCanvs(container, frag, vert, this.texture)
  }
}
</script>

<style lang="scss" scoped>
.WorkItem {
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: (9 / 16 * 100%);
  }

  &__Inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
