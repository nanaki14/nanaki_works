<template>
  <article class="WorkItem">
    <div class="WorkItem__Inner js-CanvasWrapper" />
  </article>  
</template>

<script>
export default {
  name: 'WorkItem'
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
