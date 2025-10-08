<template>
  <div v-if="showCursor" ref="cursor"
    class="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference opacity-0">
    <div class="w-2 h-2 rounded-full bg-white">
    </div>
  </div>
  <div v-editable="blok" class="">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
  <AboutMeMenu v-if="menuAboutMe" />
</template>

<script setup>
defineProps({
  blok: Object,
  storyName: String
});

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';

const route = useRoute();
const cursor = ref(null);
const showCursor = ref(false)
const menuAboutMe = ref(null);
let hasMoved = false;

onMounted(() => {
  addConditionalMenu(route.params.slug);
  updateFadeBackground(route.params.slug);

  // mobile detection
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    showCursor.value = false;
    return;
  }

  showCursor.value = true;

  let lastX = 0;
  let lastY = 0;
  let lastTime = Date.now();

  gsap.set(cursor.value, { x: lastX, y: lastY, opacity: 0 });
  gsap.to(cursor.value, { opacity: 0, duration: 0 });

  window.addEventListener('mousemove', (e) => {
    if (!cursor.value) return;

    const now = Date.now();
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    const dt = now - lastTime;
    const speed = Math.sqrt(dx * dx + dy * dy) / (dt || 1);

    // Einblenden beim ersten Move
    if (!hasMoved) {
      hasMoved = true;
      gsap.to(cursor.value, { opacity: 1, duration: 8, ease: 'power2.out' });
    }

    // Position folgt der Maus
    gsap.to(cursor.value, {
      x: e.clientX - cursor.value.offsetWidth / 2,
      y: e.clientY - cursor.value.offsetHeight / 2,
      duration: 1.2,
      ease: 'power3.out'
    });

    // Leichtes Skalieren bei schneller Bewegung
    const scale = Math.min(4.8, 1.5 + speed * 1);
    gsap.to(cursor.value, {
      scale,
      duration: 6,
      ease: 'power2.out'
    });

    lastX = e.clientX;
    lastY = e.clientY;
    lastTime = now;
  });
});

watch(
  () => route.fullPath,
  () => {
    updateFadeBackground(route.params.slug);
    addConditionalMenu(route.params.slug);
  }
)

const updateFadeBackground = (slug) => {
  if (slug && (slug.includes('projects') || slug.includes('about-me'))) {
    document.body.classList.value = 'fade-background'
  } else {
    document.body.classList.value = 'bg-white'
  }
}

const addConditionalMenu = (slug) => {
  if (menuAboutMe) {
    if (slug && slug.includes('about-me')) {
      menuAboutMe.value = true;
    } else {
      menuAboutMe.value = false;
    }
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