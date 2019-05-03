<template>
  <section class="Container">
    <dl>
      <dt><h1>About</h1></dt>
      <dd>
        1995年生まれ北海道出身のフロントエンドエンジニア。<br>
        都内の制作会社で主にSPAを用いたアプリケーションの作成をしています。<br>
        趣味でモーショングラフィックスやVJ等をしています。
      </dd>
    </dl>
    <dl>
      <dt>Skill</dt>
      <dd>
        HTML / EJS / CSS / SCSS / styled-components / GLSL /<br>
        JavaScript / TypeScript / jQuery / Vue / Nuxt / React / Next / Redux /<br>
        WordPress / Contentful / Netlify /<br>
        gulp / webpack / parcel /<br>
        AfterEffects / lottie / bodymovin / Resolume
      </dd>
    </dl>
    <dl>
      <dt>Contact</dt>
      <dd>
        <a href="mailto:nanaki.works@gmail.com">mailto:nanaki.works@gmail.com</a>
      </dd>
    </dl>
  </section>
</template>

<script>
import { TweenMax, Power3 } from 'gsap'

export default {
  title: 'WORKS | Futurize, Inc.',
  meta: [
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'About | nanaki works'
    },
    { hid: 'og:url', property: 'og:url', content: 'https://futurize.jp/works' }
  ],
  transition: {
    enter(el, done) {
      TweenMax.staggerFromTo(
        'dl',
        0.8,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          ease: Power3.easeOut
        },
        0.05,
        () => {
          done()
        }
      )
    },
    leave(el, done) {
      TweenMax.staggerTo(
        'dl',
        0.8,
        {
          y: -30,
          opacity: 0,
          ease: Power3.easeOut
        },
        0.05,
        () => {
          done()
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.Container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 120px 0 40px;
  @media (max-width: $s-width - 1px) {
    display: block;
    min-height: auto;
    padding: 80px 0 40px;
  }
  dl {
    display: flex;
    @media (max-width: $s-width - 1px) {
      display: block;
    }
    & + dl {
      margin-top: 32px;
      @media (max-width: $s-width - 1px) {
        margin-top: 48px;
      }
    }
  }
  dt {
    width: 120px;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 1px;
    @media (max-width: $s-width - 1px) {
      width: 100%;
      margin-bottom: 16px;
    }
    h1 {
      font-weight: 700;
    }
  }
  dd {
    font-size: 1.6rem;
    line-height: 2;
    letter-spacing: 1px;
    @media (max-width: $s-width - 1px) {
      font-size: 1.3rem;
    }
    a {
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
