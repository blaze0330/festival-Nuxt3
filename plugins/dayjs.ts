// https://www.npmjs.com/package/dayjs
// https://day.js.org/docs/en/display/format
// $dayjs(new Date(event.created)).format('DD-MM-YYYY HH:mm[u]') 26-01-2023 20:18
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import localizedFormat from 'dayjs/plugin/localizedFormat.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import 'dayjs/locale/nl'


export default defineNuxtPlugin((nuxtApp) => {
   
  dayjs.extend(relativeTime)
  dayjs.extend(localizedFormat)
  dayjs.extend(advancedFormat)
  dayjs.locale('nl')
  
  nuxtApp.provide('dayjs', dayjs)
})
declare module '#app' {
  interface NuxtApp {
    
    $dayjs: dayjs.Dayjs
  }
}
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}