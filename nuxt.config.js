const nodeExternals = require('webpack-node-externals')
const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'maria-driada',
    meta: [
      { charset: 'utf-8', doctype: 'html' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: "Maria Giraldo's Web project", content: "Maria Giraldo's Web project based Nuxt.js project" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css?family=Orbitron|Ubuntu|Indie+Flower|Raleway'}
    ]
  },
  css: ['~/assets/keyframes.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    vendor: ['vue-awesome'],

    extend (config, { isServer }) {
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist:[/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]
          })
        ]
      }
    },
  },

  plugins: ['~plugins/vue-awesome.js' ],

  modules: [
    ['nuxt-sass-resources-loader', resolve(__dirname, './assets/mixins.scss')]
  ]

}

