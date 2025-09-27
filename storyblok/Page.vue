<template>
  <div ref="cursor" class="fixed top-0 left-0 h-2 w-2 bg-black rounded-full z-10 pointer-events-none"></div>
  <div v-editable="blok" class="bg">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';

const route = useRoute();
const cursor = ref(null);

// Animation for cursor follow with gsap
onMounted(() => {
  updateFadeBackground(route.params.slug);

  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor.value, {
      x: e.clientX - cursor?.value?.offsetWidth / 2,
      y: e.clientY - cursor?.value?.offsetHeight / 2,
      duration: 0.8,
      delay: 0,
      ease: 'power2.out'
    })
  })
})

watch(
  () => route.fullPath,
  () => {
    updateFadeBackground(route.params.slug)
  }
)

const updateFadeBackground = (slug) => {
  if (slug && (slug.includes('projects') || slug.includes('about-me'))) {
    document.body.classList.add('fade-background')
  } else {
    document.body.classList.remove('fade-background')
  }
}

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