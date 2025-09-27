<template>
  <nav :class="classes">
    <div class="flex justify-between">
      <div>
        <NuxtLink :to="link" class="text-sm px-8 py-2 hover:underline">{{ linkText }}</NuxtLink>
      </div>
      <div v-if="route.path === '/'" class="uppercase">
        <NuxtLink to="#contact" class="text-sm px-8 py-2 hover:underline">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const link = computed(() => (route.path === '/' ? '#' : '/'))
const linkText = computed(() => (route.path === '/' ? 'EmilDueringer ©' : '< back'))
const classes = computed(() =>
  route.path === '/'
    ? 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-white'
    : 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-black'
);

</script>