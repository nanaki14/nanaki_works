const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'nanaki works',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Produced by nanaki'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'nanaki works'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Produced by nanaki'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nanaki.work/'
      },
      {
        property: 'og:image',
        content: 'https://nanaki.work/images/lorem_thumb.png'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lato:400,700'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/images/favicon-16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/images/favicon-32.png'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['./assets/scss/reset.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: './plugins/delay',
      ssr: true
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      './assets/scss/_mixins.scss',
      './assets/scss/_variable.scss',
      './assets/scss/_function.scss'
    ]
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          }
        )
      }
      config.module.rules.push(
        {
          test: /\.glsl$/,
          loader: 'webpack-glsl-loader'
        }
      )
    }
  }
}
