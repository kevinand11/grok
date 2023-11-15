// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        // @ts-ignore
        baseURL: process.env.NODE_ENV === 'production' ? '/grok' : '/',
        head: {
            title: 'Home',
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
    srcDir: 'src/application',
    css: [
        '~/assets/styles/index.css',
        "primeicons/primeicons.css"
    ],
    build: {
        transpile: ["primevue"]
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
