<template>
  <div class="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-4 lg:pb-28">
    <div class="absolute inset-0">
      <div class="h-1/3 bg-white sm:h-2/3" />
    </div>
    <div class="relative mx-auto w-full">
      <div class="text-left">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Laatste Nieuws</h2>
        
      </div>
      <div class="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3 relative">
        <div v-for="article in articles.data" :key="article.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-shrink-0">
            <nuxt-img class="h-96 w-full object-cover" :src="`${ runtimeConfig.public.apiUrl }${ article.field_image.uri.url}`"  format="webp" :alt="`Lees hier meer over ${ article.title }`" loading="lazy"></nuxt-img>
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <p class="text-sm font-small text-indigo-600">
                {{ $dayjs(new Date(article.created)).locale('nl').format('LLLL') }} uur
              </p>
              <a :href="`nieuws/${ article.id }`" class="mt-2 block after:absolute after:inset-0" :title="`${ article.title }`">
                <p class="text-xl font-semibold text-gray-900">{{ article.title }}</p></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>    
</template>

<script setup lang="ts">
 const runtimeConfig = useRuntimeConfig();

    
    const { data:articles } = await useFetch('https://cms.bamfestival.nl/jsonapi/node/article?page[limit]=6&filter[status][value]=1&filter[promote][value]=1&sort=-created&include=field_image&field_video&field_tags&jsonapi_include=1')
</script>