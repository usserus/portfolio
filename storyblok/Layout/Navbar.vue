<template>
  <nav :class="classes">
    <div class="flex justify-between">
      <div>
        <button v-if="route.path !== '/'" @click="goBack" class="text-sm px-8 py-2 hover:underline">
          &lt; back
        </button>
        <NuxtLink v-else to="#" class="text-sm px-8 py-2 hover:underline">EmilDueringer ©</NuxtLink>
      </div>
      <div v-if="route.path === '/'" class="uppercase">
        <NuxtLink to="#contact" class="text-sm px-8 py-2 hover:underline">Contact</NuxtLink>
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

const classes = computed(() =>
  route.path === '/'
    ? 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-white'
    : 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-black'
);

</script>