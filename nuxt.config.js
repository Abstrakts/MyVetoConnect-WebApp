import colors from 'vuetify/es5/util/colors'
const webpack = require('webpack')

export default {
    server: {
        port: 3000,
        host: 'localhost',
    },
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        //titleTemplate: '%s - ' + process.env.npm_package_name,
        title: 'My vetoconnect',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description du projet' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/jwt',
        { src: '@/plugins/facebook.js', mode: 'client' },
        { src: '@/plugins/mapbox', mode: 'client' },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@neneos/nuxt-animate.css',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'http://localhost:8000/api',
    },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            light: true,
            themes: {
                light: {
                    primary: '#66c4b6',
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: '#66c4b6',
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        plugins: [
            new webpack.ProvidePlugin({
                mapboxgl : 'mapbox-gl'
            })
        ],
        extend(config, ctx) {}
    }
}