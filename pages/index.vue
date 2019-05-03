<template>
  <section class="Container">
    <div class="WorksUnit">
      <WorkItem v-for="work in works" :key="work.thumb" :thumb="work.thumb" :link="work.link" />
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
