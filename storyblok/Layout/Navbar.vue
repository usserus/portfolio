<template>
  <nav :class="classes">
    <div class="flex justify-between">
      <div>
        <a :href="link" class="text-sm px-8 py-2 hover:underline">{{ linkText }}</a>
      </div>
      <div v-if="route.path === '/'" class="uppercase">
        <a href="#contact" class="text-sm px-8 py-2 hover:underline">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();

const link = ref<string>('');
const linkText = ref<string>('');
const classes = ref<string>('');

if (route.path === '/') {
  linkText.value = 'EmilDueringer ©';
  link.value = '#';
  classes.value = 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-white';
} else {
  linkText.value = '< back';
  link.value = '/';
  classes.value = 'fixed top-0 left-0 right-0 z-10 py-3 px-4 font-mono font-light bg-black';
}

</script>