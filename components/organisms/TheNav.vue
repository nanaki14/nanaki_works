<template>
  <nav class="TheNav">
    <ul>
      <li>
        <nuxt-link to="/" class="js-link" prefetch>
          Works
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" class="js-link" prefetch>
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
  z-index: 1;
  @media (max-width: $s-width - 1px) {
    top: 30px;
    right: 4.4%;
  }
  ul {
    display: flex;
    align-items: center;
    li {
      margin-left: 12px;
    }
    a {
      position: relative;
      display: block;
      padding: 4px 8px;
      font-size: 1.3rem;
      font-weight: 400;
      letter-spacing: 1px;
      text-shadow: 2px 1px 1px #e9e9e9;
      opacity: 0.7;
      transition: $ease-in-out-quad 0.3s;
      &:hover {
        opacity: 1;
      }
      &.nuxt-link-exact-active {
        font-weight: 700;
        opacity: 1;
      }
    }
  }
}
</style>
