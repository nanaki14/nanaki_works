<template>
  <nav class="TheNav">
    <ul>
      <li>
        <nuxt-link to="/" class="js-link">
          Works
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/abour" class="js-link">
          About
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNav'
}
</script>

<style lang="scss" scoped>
.TheNav {
  position: fixed;
  right: 48px;
  top: 32px;
  ul {
    display: flex;
    align-items: center;
    li {
      margin-left: 12px;
    }
    a {
      display: block;
      padding: 4px 8px;
      font-size: 1.3rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
}
</style>
