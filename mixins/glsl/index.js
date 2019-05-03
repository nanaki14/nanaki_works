import Canvas from './canvas'
export default {
  methods: {
    initCanvs(container, frag, vert, uniforms) {
      this.canvas = new Canvas(container, frag, vert, uniforms)
      this.canvas.init()
    },
    mouseOver() {
      this.canvas.mouseOver()
    },
    mouseLeave() {
      this.canvas.mouseLeave()
    }
  },
  data() {
    return {
      canvas: null
    }
  }
}
