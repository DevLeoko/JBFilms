import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Johannes Blenke',
    meta: [
      // Basics
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },

      // SEO
      {
        hid: 'description',
        name: 'description',
        content: 'Johannes Blenke. Filme die begeistern und inspirieren.'
      },
      {
        name: 'keywords',
        content:
          'film, werbevideo, filmproduktion, event, commercial, video, trailer, werbung, deutsch, german'
      },
      {
        property: 'og:title',
        content: 'Johannes Blenke. Filme die begeistern und inspirieren.'
      },
      {
        property: 'og:type',
        content: 'Website'
      },
      {
        property: 'og:url',
        content: 'https://confident-poitras-82a4bd.netlify.com/'
      },
      {
        property: 'og:site_name',
        content: 'Johannes Blenke. Cinematographer.'
      },

      // Favicon
      {
        name: 'msapplication-TileColor',
        content: '#212121'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      }
    ],
    link: [
      // Favicon
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        color: '#212121',
        href: '/safari-pinned-tab.svg'
      },

      // Iconset Vuetify
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
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
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify', '@/plugins/visibilities'],

  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
