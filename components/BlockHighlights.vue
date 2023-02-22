<template>
<div class="bg-white">
    <div class="mx-auto w-full py-6 px-6 lg:px-8 lg:py-4">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Highlights</h2>
          
        </div>
        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          <li v-for="event in highlights.data" :key="event.title">
            <div class="space-y-4 relative">
              <div class="aspect-w-3 aspect-h-2">
                  <nuxt-img class="rounded-lg object-cover shadow-lg" :src="`${ runtimeConfig.public.apiUrl }${event.field_image_portrait.uri.url }`"  format="webp" :alt="`${ event.title }, op BAM! Festival Hengelo (Ov.)`" loading="lazy"></nuxt-img>
              </div>

              <div class="space-y-2">
                <div class="space-y-1 font-medium leading-6">
                  <a class="after:absolute after:inset-0" :href="`/programma/${ event.id }`" :title="`${ event.title }`"><h3 class="text-indigo-600 text-2xl font-bold uppercase">{{ event.title }}</h3></a>
                  <span class="">{{ event.field_subtitle }}</span>
                    <div class="flex space-x-4">
                        <div class="flex"><CalendarDaysIcon class="h-6 w-6 text-blue-500 mr-2"/>{{ event.field_dag }}</div>
                        <div class="flex"><MapIcon class="h-6 w-6 text-blue-500 mr-2"/>Main stage</div>
                        <div class="flex"><ClockIcon class="h-6 w-6 text-blue-500 mr-2"/>21:30 uur</div>
                        <div class="flex"><RadioIcon class="h-6 w-6 text-blue-500 mr-2"/>{{ event.field_tags[0].name }}</div>
                    </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { CalendarDaysIcon, MapIcon, ClockIcon, RadioIcon } from '@heroicons/vue/20/solid'
  const runtimeConfig = useRuntimeConfig();



   
    const { data:highlights } = await useFetch('https://cms.bamfestival.nl/jsonapi/node/event?filter[status][value]=1&filter[promote][value]=1&sort=field_dag,-field_weight,title&include=field_image_portrait,field_location,field_tags&filter[name-filter][condition][path]=field_weight&filter[name-filter][condition][operator]=IN&filter[name-filter][condition][value][1]=5&filter[name-filter][condition][value][2]=4&jsonapi_include=1')

    
</script>