<template>
  <div ref="cursor" class="fixed top-0 left-0 h-1 w-1 bg-black rounded-full z-10"></div>
  <div v-editable="blok" class="bg">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });

import { onBeforeMount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';

const route = useRoute();
const cursor = ref(null);

onBeforeMount(() => {
  const slug = route.params.slug;
  if (slug && slug.includes('projects')) {
    document.body.classList.add('fade-background');
  }
});

// Animation for cursor follow with gsap
onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor.value, {
      x: e.clientX - cursor.value.offsetWidth / 2,
      y: e.clientY - cursor.value.offsetHeight / 2,
      duration: 0.8,
      delay: 0,
      ease: 'power2.out'
    })
  })
})

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