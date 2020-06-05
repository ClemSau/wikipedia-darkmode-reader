export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
    css: [
        '~/assets/sass/tailwind.pcss',
        '~/assets/sass/main.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/color-mode',
        'nuxt-purgecss',
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: { baseURL: 'https://en.wikipedia.org/api/rest_v1' },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        postcss: {
            plugins: {
                tailwindcss: './tailwind.config.js'
            }
        }
    },
    purgeCSS: {
        mode: 'postcss',
        whitelist: ['mode-dark']
    }
}