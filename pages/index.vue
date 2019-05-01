<template>
  <section class="container">
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
.WorksUnit {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1000px;
  width: 80%;
  > * {
    width: 50%;
  }
}
</style>
