export default defineNuxtConfig({
    css: ['@/assets/css/roboto.css'],
    modules: [
        [
            '@storyblok/nuxt',
            {
                accessToken: 'jgZ2j5Qjvkc8mNFfXVSPBQtt',
                apiOptions: {
                    region: '' // Set 'US" if your space is created in US region (EU default)
                }
            },
        ],
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
    ],
    vite: {
        server: {
            hmr: false
        }
    },
    head: {
        link: [
            {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.ico'},
        ],
    }
})