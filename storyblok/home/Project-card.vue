<template>
  <div v-editable="blok">

    <NuxtLink :to="blok.link && blok.link.story ? blok.link.story.url : '#'"
      class="group font-mono font-light uppercase">

      <div class="animation">
        <img :src="blok.image.filename" :alt="blok.image.alt" class="w-full h-full">
        <div class="overlay" :class="{
    'overlay--black': route.path === '/projects',
    'overlay--white': route.path !== '/projects'
  }"></div>
      </div>

      <hr class="h-px my-3 bg-gray-500 border-0">

      <div class="text-xs mt-1">
        {{ blok.subheading }}
      </div>

      <div class="text-xl">
        {{ blok.heading }}
      </div>

    </NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

defineProps({
  blok: Object
});
const route = useRoute();

</script>

<style scoped>
.animation {
  position: relative;
  overflow: hidden;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(100%);
  transition: transform 1s;
}

.overlay--black {
  @apply bg-black text-white;
}

.overlay--white {
  @apply bg-white text-black;
}

.overlay--white::before {
  content: "show project";
  white-space: nowrap;
  position: absolute;
  right: 0;
  @apply font-mono font-light uppercase text-xs mt-2;
}

.overlay--black::before,
.overlay--black:active::before {
  content: "show project";
  white-space: nowrap;
  position: absolute;
  right: 0;
  @apply font-mono font-light uppercase text-xs mt-2;
}

.animation:hover .overlay {
  transform: translateY(90%);
}
</style>