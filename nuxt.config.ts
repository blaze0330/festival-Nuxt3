// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true, // default value
    mode: "universal",
    image: {
        provider: "ipx"
    },
    jsonApi: {
        baseURL: 'https://api.bamfestival.nl/jsonapi',
        /* other module options */
      },
      
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        'nuxt-jsonapi'
    ]
    
})
