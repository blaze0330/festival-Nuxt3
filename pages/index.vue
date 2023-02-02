<template>
  <div class="bg-white">


    <main>
      <div>
        <nuxt-img 
            class="h-full w-full object-cover sm:rounded-2xl p-8" 
            src="/images/headers/header_weekend_2023.jpg"
            format="webp" 
            sizes="xs:320px  sm:640px md:768px lg:1024px xl:1280px xxl:1536px 2xl:1536px"
            alt="Header BAM! Festival Hengelo (Ov.) - 2023"
        ></nuxt-img>
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