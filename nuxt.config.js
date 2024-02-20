export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Выставка котиков',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Создавайте, удаляйте и изменяйте котов на этой интерактивной выставке!' },

      { name: 'keywords', content: 'cats' },
      { hid: 'robots', name: 'robots', content: 'index, follow, noarchive' },

      { name: 'googlebot', content: 'notranslate' },
      { name: 'google', content: 'nositelinkssearchbox' },

      { name: 'referrer', content: 'no-referrer-when-downgrade' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.4/css/all.css' },
      { hid: 'bootstrap-css', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&display=swap' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://cats.petiteweb.dev/api/single/nuxtcatstest/'
  },

  image: {
    dir: 'assets/img'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: false,
  telemetry: false,

  target: 'server'

}
