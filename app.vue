<template>
<nav>
  
  <Popover class="relative bg-white">
    <div class="pointer-events-none absolute inset-0 z-30 shadow" aria-hidden="true" />
    <div class="relative z-20">
      <div class="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
        <div>
          <a href="/" class="flex" title="Home">
            <span class="sr-only">BAM! Festival</span>
            <svg class="h-8 w-auto sm:h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M471.8,265.1c-9.2,1.7-16.8,7.7-20.2,16L431,151.8l-47.8,8.7l-17.2,60.2c-3.9,13.8-6.7,25.7-9.2,40.2l-0.5,0.1
                      c-2.6-14.1-5.1-25.2-8.4-36.3l-16.2-54.8l-49.2,9l-22.3,138.6l-42.7-126.7l-49.9,9.1l-34.7,116c-0.1-0.7-0.2-1.4-0.3-2.2
                      c-2.4-12.9-10.5-23.5-21.6-25.2l0-0.2c15.2-11.7,23.5-27,19.8-46.8c-4.7-25.8-27.6-31-57.8-25.5c-17.2,3.1-44.4,8.6-60.4,12.5
                      l-1.2,166.6c26.8-4.9,45-7.7,56.7-9.9c23.5-4.3,41.6-15.1,52.7-28.9l-5.9,19.8l44.2-8.1l8.1-28.6l48.7-8.9l8.1,25.7l30.8-5.6
                      l15.5-2.8l29.6-5.4l6.9-52.9c1.6-12.9,3.1-26,4.1-42.5l0.2,0c2.5,14.9,6.5,32.6,10.6,47.2l12.1,42l40.6-7.4l13-52
                      c4-16,7.3-30.5,9.7-45.5l0.5-0.1c1.3,14.1,2.8,26.2,4.3,37l7.2,54.2l47.3-8.7l-1.1-6.8c5,5.2,12.6,8.2,21.5,6.5
                      c14.1-2.6,24.6-15.4,21.8-30.4C496.9,271.4,485.9,262.5,471.8,265.1z M65.2,348.3c-2.4,0.4-7.2,1.1-9.6,1.3l-0.1-30.4
                      c2.8-0.8,9-1.9,14.1-2.8c9.6-1.7,15.6,1.4,16.9,8.5C88.1,334.5,81.4,345.3,65.2,348.3z M63,283.7c-2.4,0.4-4.8,0.9-7.2,1.1
                      l0.3-28.2c3.8-0.9,7.3-1.8,12.6-2.8c9.6-1.7,15.4,0.4,16.6,6.9C87.2,271.4,78.8,280.8,63,283.7z M177.9,301.5l5.4-19.3
                      c3.3-11.7,6.1-23.1,8-33.1l0.5-0.1c2.1,10,4.6,18.4,7.5,27.5l6.1,19.9L177.9,301.5z"/>
                    <polygon points="450.9,134.6 456.4,260.5 493.9,253.6 500.8,125.4"/>
                </svg>
          </a>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Open menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <div class="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900">Home</a>
          <a href="/nieuws" class="text-base font-medium text-gray-500 hover:text-gray-900">Nieuws</a>
          <PopoverGroup as="nav" class="flex space-x-10">
            <Popover v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                <span>Line-Up</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                <PopoverPanel class="absolute inset-x-0 top-full z-10 hidden transform bg-white shadow-lg md:block">
                  <div class="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                    <a v-for="item in lineup" :key="item.name" :href="item.href" class="-m-3 flex flex-col justify-between rounded-lg p-3 hover:bg-gray-50">
                      <div class="flex md:h-full lg:flex-col">
                        <div class="flex-shrink-0">
                          <span class="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                          </span>
                        </div>
                        <div class="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                          <div>
                            <p class="text-base font-medium text-gray-900">{{ item.name }}</p>
                            <p class="mt-1 text-sm text-gray-500">{{ item.description }}</p>
                          </div>
                          <p class="mt-2 text-sm font-medium text-indigo-600 lg:mt-4">
                            Klik hier voor meer {{ item.name }}
                            <span aria-hidden="true"> &rarr;</span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                </PopoverPanel>
              </transition>
            </Popover>
            <Popover v-slot="{ open }">
              <PopoverButton :class="[open ? 'text-gray-900' : 'text-gray-500', 'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2']">
                <span>Informatie</span>
                <ChevronDownIcon :class="[open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
                <PopoverPanel class="absolute inset-x-0 top-full z-10 hidden transform shadow-lg md:block">
                  <div class="absolute inset-0 flex">
                    <div class="w-1/2 bg-white" />
                    <div class="w-1/2 bg-gray-50" />
                  </div>
                  <div class="relative mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <nav class="grid gap-y-10 bg-white px-4 py-8 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                      <div>
                        <h3 class="text-base font-medium text-gray-500">Informatie</h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li v-for="item in company" :key="item.name" class="flow-root">
                            <a :href="item.href" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                              <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 class="text-base font-medium text-gray-500">Website</h3>
                        <ul role="list" class="mt-5 space-y-6">
                          <li v-for="item in resources" :key="item.name" class="flow-root">
                            <a :href="item.href" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                              <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              <span class="ml-4">{{ item.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                    <div class="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                      <div>
                        <h3 class="text-base font-medium text-gray-500">Laatste nieuws</h3>
                        <ul role="list" class="mt-6 space-y-6">
                          <li v-for="post in blogPosts" :key="post.id" class="flow-root">
                            <a :href="post.href" class="-m-3 flex rounded-lg p-3 hover:bg-gray-100">
                              <div class="hidden flex-shrink-0 sm:block">
                                <img class="h-20 w-32 rounded-md object-cover" :src="post.imageUrl" alt="" />
                              </div>
                              <div class="w-0 flex-1 sm:ml-8">
                                <h4 class="truncate text-base font-medium text-gray-900">{{ post.name }}</h4>
                                <p class="mt-1 text-sm text-gray-500">{{ post.preview }}</p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="mt-6 text-sm font-medium">
                        <a href="/nieuws" class="text-indigo-600 hover:text-indigo-500">
                          Zie al het nieuws
                          <span aria-hidden="true"> &rarr;</span>
                        </a>
                      </div>
                    </div>
                    <div class="bg-gray-50 text-gray-400">
                    <div class="mx-auto max-w-7xl space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                      <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                        <a :href="item.href" class="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100">
                          <component :is="item.icon" class="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                          <span class="ml-3">{{ item.name }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>

                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
            <a href="/inschrijven-vrijwilligers" class="text-base font-medium text-gray-500 hover:text-gray-900">Vrijwilligers</a>
            <a href="/fotoalbums" class="text-base font-medium text-gray-500 hover:text-gray-900">Foto's</a>
            <a href="/sponsors" class="text-base font-medium text-gray-500 hover:text-gray-900">Sponsors</a>
            <a href="/contact" class="text-base font-medium text-gray-500 hover:text-gray-900">Contact</a>

          <div class="flex items-center md:ml-12">
            <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
            <a href="#" class="ml-8 inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Sign up</a>
          </div>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition md:hidden">
        <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="px-5 pt-5 pb-6 sm:pb-8">
            <div class="flex items-center justify-between">
              <div>
                <svg class="h-8 w-auto sm:h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                    <path d="M471.8,265.1c-9.2,1.7-16.8,7.7-20.2,16L431,151.8l-47.8,8.7l-17.2,60.2c-3.9,13.8-6.7,25.7-9.2,40.2l-0.5,0.1
                      c-2.6-14.1-5.1-25.2-8.4-36.3l-16.2-54.8l-49.2,9l-22.3,138.6l-42.7-126.7l-49.9,9.1l-34.7,116c-0.1-0.7-0.2-1.4-0.3-2.2
                      c-2.4-12.9-10.5-23.5-21.6-25.2l0-0.2c15.2-11.7,23.5-27,19.8-46.8c-4.7-25.8-27.6-31-57.8-25.5c-17.2,3.1-44.4,8.6-60.4,12.5
                      l-1.2,166.6c26.8-4.9,45-7.7,56.7-9.9c23.5-4.3,41.6-15.1,52.7-28.9l-5.9,19.8l44.2-8.1l8.1-28.6l48.7-8.9l8.1,25.7l30.8-5.6
                      l15.5-2.8l29.6-5.4l6.9-52.9c1.6-12.9,3.1-26,4.1-42.5l0.2,0c2.5,14.9,6.5,32.6,10.6,47.2l12.1,42l40.6-7.4l13-52
                      c4-16,7.3-30.5,9.7-45.5l0.5-0.1c1.3,14.1,2.8,26.2,4.3,37l7.2,54.2l47.3-8.7l-1.1-6.8c5,5.2,12.6,8.2,21.5,6.5
                      c14.1-2.6,24.6-15.4,21.8-30.4C496.9,271.4,485.9,262.5,471.8,265.1z M65.2,348.3c-2.4,0.4-7.2,1.1-9.6,1.3l-0.1-30.4
                      c2.8-0.8,9-1.9,14.1-2.8c9.6-1.7,15.6,1.4,16.9,8.5C88.1,334.5,81.4,345.3,65.2,348.3z M63,283.7c-2.4,0.4-4.8,0.9-7.2,1.1
                      l0.3-28.2c3.8-0.9,7.3-1.8,12.6-2.8c9.6-1.7,15.4,0.4,16.6,6.9C87.2,271.4,78.8,280.8,63,283.7z M177.9,301.5l5.4-19.3
                      c3.3-11.7,6.1-23.1,8-33.1l0.5-0.1c2.1,10,4.6,18.4,7.5,27.5l6.1,19.9L177.9,301.5z"/>
                    <polygon points="450.9,134.6 456.4,260.5 493.9,253.6 500.8,125.4"/>
                </svg>
              </div>
              <div class="-mr-2">
                <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6 sm:mt-8">
              <nav>
                <div class="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                  <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50">
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                      <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div class="ml-4 text-base font-medium text-gray-900">{{ item.name }}</div>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5">
            <div class="grid grid-cols-2 gap-4">
              <NuxtLink class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" to="/informatie" title="Disclaimer">Informatie algemeen</NuxtLink>
              <NuxtLink class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" to="/route-parkeren" title="Disclaimer">Route en Parkeren</NuxtLink>
              <NuxtLink class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" to="/huisregels" title="Disclaimer">Huisregels</NuxtLink>
              <NuxtLink class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" to="/historie" title="Disclaimer">Historie</NuxtLink>
              <NuxtLink class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" to="/aftermovies" title="Aftermovies van vorige edities">Aftermovies</NuxtLink>
              <NuxtLink class="rounded-md text-base font-medium text-gray-900 hover:text-gray-700" to="/disclaimer-copy-right-privacy" title="Disclaimer">Disclaimer, Copyright & Cookies</NuxtLink>

            </div>

          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>

</nav>


  <div>
    <!-- Markup shared across all pages, ex: NavBar -->
    <NuxtPage />
  </div>



  <footer class="bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <svg class="h-7 w-auto sm:h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 512 512"  xml:space="preserve">
                    <path d="M471.8,265.1c-9.2,1.7-16.8,7.7-20.2,16L431,151.8l-47.8,8.7l-17.2,60.2c-3.9,13.8-6.7,25.7-9.2,40.2l-0.5,0.1
                      c-2.6-14.1-5.1-25.2-8.4-36.3l-16.2-54.8l-49.2,9l-22.3,138.6l-42.7-126.7l-49.9,9.1l-34.7,116c-0.1-0.7-0.2-1.4-0.3-2.2
                      c-2.4-12.9-10.5-23.5-21.6-25.2l0-0.2c15.2-11.7,23.5-27,19.8-46.8c-4.7-25.8-27.6-31-57.8-25.5c-17.2,3.1-44.4,8.6-60.4,12.5
                      l-1.2,166.6c26.8-4.9,45-7.7,56.7-9.9c23.5-4.3,41.6-15.1,52.7-28.9l-5.9,19.8l44.2-8.1l8.1-28.6l48.7-8.9l8.1,25.7l30.8-5.6
                      l15.5-2.8l29.6-5.4l6.9-52.9c1.6-12.9,3.1-26,4.1-42.5l0.2,0c2.5,14.9,6.5,32.6,10.6,47.2l12.1,42l40.6-7.4l13-52
                      c4-16,7.3-30.5,9.7-45.5l0.5-0.1c1.3,14.1,2.8,26.2,4.3,37l7.2,54.2l47.3-8.7l-1.1-6.8c5,5.2,12.6,8.2,21.5,6.5
                      c14.1-2.6,24.6-15.4,21.8-30.4C496.9,271.4,485.9,262.5,471.8,265.1z M65.2,348.3c-2.4,0.4-7.2,1.1-9.6,1.3l-0.1-30.4
                      c2.8-0.8,9-1.9,14.1-2.8c9.6-1.7,15.6,1.4,16.9,8.5C88.1,334.5,81.4,345.3,65.2,348.3z M63,283.7c-2.4,0.4-4.8,0.9-7.2,1.1
                      l0.3-28.2c3.8-0.9,7.3-1.8,12.6-2.8c9.6-1.7,15.4,0.4,16.6,6.9C87.2,271.4,78.8,280.8,63,283.7z M177.9,301.5l5.4-19.3
                      c3.3-11.7,6.1-23.1,8-33.1l0.5-0.1c2.1,10,4.6,18.4,7.5,27.5l6.1,19.9L177.9,301.5z"/>
                    <polygon points="450.9,134.6 456.4,260.5 493.9,253.6 500.8,125.4"/>
                </svg>
          <p class="text-base leading-6 text-gray-600">Het BAM! Festival is een gratis festival dat sinds 2008 jaarlijks in het Prins Bernhardplantsoen van Hengelo (OV) gehouden wordt.  In 2022 is er de vrijdagavond bijgekomen.</p>
          <div class="flex space-x-6">
            <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-semibold leading-6 text-gray-900">Programmering</h3>
              <ul role="list" class="mt-6 space-y-3">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-base leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-base font-semibold leading-6 text-gray-900">Informatie</h3>
              <ul role="list" class="mt-6 space-y-3">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-base leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-base font-semibold leading-6 text-gray-900">Website</h3>
              <ul role="list" class="mt-6 space-y-3">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-base leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0">
              <h3 class="text-base font-semibold leading-6 text-gray-900">Contact met BAM!</h3>
              <ul role="list" class="mt-6 space-y-3">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-base leading-6 text-gray-600 hover:text-gray-900">{{ item.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-base leading-5 text-gray-800 text-center">&copy; 2023 BAM! Festival Hengelo | Vondelstraat 49 | 7551 BB Hengelo (Ov).  |  Deze site gebruikt cookies klik  <NuxtLink to="/cookies">hier</NuxtLink>, voor meer info.  <NuxtLink to="/disclaimer-copy-right-privacy">Disclaimer</NuxtLink></p>
      </div>
    </div>
  </footer>
</template>

<script setup>

import { defineComponent, h } from 'vue'

const navigation = {
  solutions: [
    { name: 'Muziek', href: '/programma' },
    { name: 'Theater', href: '/theater' },
    { name: 'Kunst', href: '/kunst' },

  ],
  support: [
    { name: 'Informatie algemeen', href: '/informatie' },
    { name: 'Route en Parkeren', href: '/route-parkeren' },
    { name: 'Huisregels', href: '/huisregels' },
    { name: 'Historie', href: '/historie' },
    { name: 'Aftermovies', href: '/aftermovies' },
  ],
  company: [
    { name: 'Cookies Verklaring', href: '/cookies' },
    { name: 'Disclaimer, Copyright & Privacy', href: '/disclaimer-copy-right-privacy' },
    { name: 'ANBI-Status', href: '/anbi-status' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Vrijwilliger worden', href: '/inschrijven-vrijwilligers' },
    { name: 'Sponsor worden', href: '/sponsor-worden' },
    { name: 'Pers en fotografie', href: '/pers-fotografie' },
    { name: 'Enquete', href: '/enquete' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/BAM.Festival',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/bamfestival.hengelo/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/18420424/',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
            }),
          ]),
      }),
    },

    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCcgTzyV1jlKLgUQWf32KoqQ',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}


import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const lineup = [
  {
    name: 'Muziek',
    description: 'Alle muziek programmering van vrijdag  en zaterdag',
    href: '/programma',
    icon: ChartBarIcon,
  },
  {
    name: 'Theater',
    description: 'Theater programmering op Zaterdag',
    href: '/theater',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Kunst',
    description: "Kunst tijdens het weekend van BAM! Festival", 
    href: '/kunst', 
    icon: ShieldCheckIcon },

]
const solutions = [
  {
    name: 'Programmering',
    description: 'Ga naar de programmering van BAM! Muziek, Theater en Kunst.',
    href: '/programma',
    icon: ChartBarIcon,
  },
  {
    name: 'Nieuws',
    description: 'Laatste Nieuws van BAM!',
    href: '/nieuws',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Vrijwilliger worden', description: "Vrijwilliger worden bij BAM! Festival", href: '/inschrijven-vrijwilligers', icon: ShieldCheckIcon },
  {
    name: 'Fotos',
    description: "Fotoalbums van de voorgaande edites per fotograaf",
    href: '/fotoalbums',
    icon: Squares2X2Icon,
  },
  { name: 'Sponsoren', description: "Sponsoren van BAM! Festival", href: '/sponsoren', icon: ShieldCheckIcon },
  {
    name: 'Contact',
    description: "Contact opnemen met BAM! Festival",
    href: '/contact',
    icon: Squares2X2Icon,
  },
]
const callsToAction = [
  { name: 'Aftermovie', href: '/aftermovies', icon: PlayIcon },
  { name: 'Programmering', href: '/programma', icon: CheckCircleIcon },
  { name: 'Contact', href: '/contact', icon: PhoneIcon },
]
const company = [
  { name: 'Informatie algemeen', href: '#', icon: InformationCircleIcon },
  { name: 'Route en Parkeren', href: '/route-parkeren', icon: BuildingOfficeIcon },
  { name: 'Huisregels', href: '/huisregels', icon: NewspaperIcon },
  { name: 'Historie', href: '/historie', icon: BriefcaseIcon },
  
]
const resources = [
  { name: 'Vrijwilliger worden', href: '/inschrijven-vrijwilligers', icon: UserGroupIcon },
  { name: 'Sponsor worden', href: '/sponsor-worden', icon: GlobeAltIcon },
  { name: 'Pers en fotografie', href: '/pers-fotografie', icon: BookmarkSquareIcon },
  { name: 'Enquete', href: '/enquete', icon: ComputerDesktopIcon },
  { name: 'Privacy', href: '/disclaimer-copy-right-privacy', icon: ShieldCheckIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]
</script>