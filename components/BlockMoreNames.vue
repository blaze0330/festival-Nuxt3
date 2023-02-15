<template>
    
  <div class="bg-gray-900 py-8 sm:py-16">
    <div class="mx-auto  px-6 lg:px-8">
      <div class="mx-auto  lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Meer namen</h2>
        <div class="mt-6 grid grid-cols-1 gap-0.5 md:grid-cols-3 xl:grid-cols-8 lg:mt-8">
            <div class="col-span-1 flex justify-center  py-4 px-4" v-for="event in morenames.data" :key="event.title">
                
                <div class="space-y-2 text-2xl font-bold text-gray-300">
                    <span>{{ event.title }}</span>
                </div>
            
            </div>
        </div>
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
       
       // const { data:morenames }  = await useFetch('https://cms.bamfestival.nl/jsonapi/node/event?filter[status][value]=1&filter[promote][value]=1&sort=-field_weight,title&filter[name-filter][condition][path]=field_weight&filter[name-filter][condition][operator]=IN&filter[name-filter][condition][value][1]=3&filter[name-filter][condition][value][2]=2&filter[name-filter][condition][value][3]=1&filter[name-filter][condition][value][4]=0&jsonapi_include=1')
        const { data:morenames }  = await useFetch('https://cms.bamfestival.nl/jsonapi/node/event?filter[status][value]=1&filter[promote][value]=1&sort=field_dag,-field_weight,title&include=field_image_portrait,field_location&filter[name-filter][condition][path]=field_weight&filter[name-filter][condition][operator]=IN&filter[name-filter][condition][value][1]=5&filter[name-filter][condition][value][2]=4&jsonapi_include=1')
</script>