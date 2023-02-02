// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true, // default value
    mode: "universal",
    image: {
        provider: "ipx"
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge'
    ]
    
})
