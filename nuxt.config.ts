// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true, // default value
    target: static,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge'
    ]
    
})
