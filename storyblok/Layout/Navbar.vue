<template>
  <nav :class="classes">
    <div class="flex justify-between">
      <div>
        <NuxtLink v-if="route.path !== '/'" @click="goBack" class="text-sm px-8 py-2 cursor-pointer hover:underline">
          &lt; back
        </NuxtLink>
        <NuxtLink v-else @click="scrollToTop()" class="text-sm px-8 py-2 cursor-pointer hover:underline">EmilDueringer ©
        </NuxtLink>
      </div>
      <div v-if="route.path === '/'" class="uppercase">
        <NuxtLink to="/about-me" class="text-sm cursor-pointer hover:underline">About me</NuxtLink>
        <NuxtLink to="#contact" class="text-sm px-8 py-2 cursor-pointer hover:underline">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const route = useRoute();
const router = useRouter();

const goBack = () => {
  router.back();
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const classes = computed(() =>
  route.path === '/'
    ? 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-white'
    : 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-black'
);

</script>