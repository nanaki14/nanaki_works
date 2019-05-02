<template>
  <section class="Container">
    <div class="WorksUnit">
      <WorkItem v-for="work in works" :key="work.thumb" :thumb="work.thumb" />
    </div>
  </section>
</template>

<script>
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
  }
}
</script>

<style lang="scss" scoped>
.Container {
  overflow-x: auto;
}
.WorksUnit {
  display: flex;
  align-items: center;
  width: 600px * 8;
  height: 100%;
  margin: 0 auto;
  > * {
    width: 600px;
  }
}
</style>
