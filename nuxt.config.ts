// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true, // default value
    mode: "universal",
    image: {
        provider: "ipx"
    },
    runtimeConfig: {
        
        public: {
            apiUrl: process.env.API_BASE_URL || "https://cms.bamfestival.nl",
        }
    },
    jsonApi: {
        baseURL: 'https://cms.bamfestival.nl/jsonapi',
        /* other module options */
      },

    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        'nuxt-jsonapi'
        
    ]
    
})
