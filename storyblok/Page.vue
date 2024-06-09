<template>
  <div v-editable="blok" class="bg">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });

import {onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

onBeforeMount(() => {
  const slug = route.params.slug;
  if (slug && slug.includes('projects')) {
    document.body.classList.add('fade-background');
  }
});

</script>

<style>

.fade-background {
  background-color: black;
  color: #e5ded5;
  transition: background-color 2s ease
}

* {
  scroll-behavior: smooth;
}

</style>