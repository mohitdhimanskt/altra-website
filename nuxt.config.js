export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'altra',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "assets/css/bootstrap.css",
    "assets/css/style.css",

  ],
  js:[
    "assets/js/jquery.min.js",
    "assets/js/bootsrap.min.js"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/OptiImage',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/fontawesome' 
  ],
  
 

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
