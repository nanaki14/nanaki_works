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
  padding-top: 120px;
}
.WorksUnit {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  > * {
    width: 30%;
    margin: 0 0 5% 5%;
    &:nth-child(3n + 1) {
      margin-left: 0;
    }
  }
}
</style>
