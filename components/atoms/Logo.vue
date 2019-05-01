<template>
  <div class="Logo">
    <h1 ref="title">
      nanaki works
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  mounted() {
    const target = this.$refs.title
    const text = target.innerText
    target.innerText = null
    text
      .trim()
      .split('')
      .forEach(t => {
        target.innerHTML += `<span>${t}</span>`
      })

    target.style.display = 'block'
  }
}
</script>

<style lang="scss">
.Logo {
  pointer-events: none;
  text-shadow: 2px 1px 1px #e9e9e9;
  > h1,
  > h2 {
    display: none;
    color: $color-black87;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.4em;
    span {
      position: absolute;
      top: 0;
      display: block;
      width: 14px;
      opacity: 0;
    }
  }
}
</style>
