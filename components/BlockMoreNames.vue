<template>
    <div class="bg-white">
        <div class="mx-auto w-full py-12 px-6 lg:px-8 lg:py-24">
          <div class="space-y-12">
            <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Highlights</h2>
              
            </div>
            <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
              <li v-for="event in morenames.data" :key="event.title">
                <div class="space-y-4">
         
    
                  <div class="space-y-2">
                    <div class="space-y-1 text-lg font-medium leading-6">
                      <h3>{{ event.field_subtitle }} | {{ event.field_dag }}</h3>
                      <p class="text-indigo-600">{{ event.title }}</p>
                    </div>

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
    <script setup>
    
    function formatDateLong(time) {
          const date = new Date(time);
          const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};
          
        return date.toLocaleString("nl-NL", options);
                                   }
    
        const apiUrl = 'https://cms.bamfestival.nl'
       
        const { data:morenames }  = await useFetch('https://cms.bamfestival.nl/jsonapi/node/event?filter[status][value]=1&filter[promote][value]=1&sort=-field_weight,title&filter[name-filter][condition][path]=field_weight&filter[name-filter][condition][operator]=IN&filter[name-filter][condition][value][1]=5&filter[name-filter][condition][value][2]=2&filter[name-filter][condition][value][3]=1&filter[name-filter][condition][value][4]=0&jsonapi_include=1')
        
    </script>