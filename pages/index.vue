<template>
  <div class="bg-white">


    <main>
      <div>
        <nuxt-img 
            class="h-full w-full object-cover sm:rounded-2xl p-8" 
            format="webp" src="/images/headers/header_weekend_2023.jpg" 
            
            alt="Header BAM! Festival Hengelo (Ov.) - 2023"
        ></nuxt-img>
      </div>
      <div>
        <!-- Hero card -->
        <div class="relative">
          <div class="absolute inset-x-0 bottom-0 bg-gray-100" />
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
              <div class="absolute inset-0">
                <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
                <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
              </div>

          </div>
        </div>


      </div>
    </div>
      <!-- More main page content here... -->
    </main>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
]
const navigation = [
  { name: 'Pricing', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Company', href: '#' },
]
</script>