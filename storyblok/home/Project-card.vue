<template>
  <div v-editable="blok">

    <NuxtLink :to="blok.link && blok.link.story ? blok.link.story.url : '#'"
      class="group font-mono font-light uppercase">

      <div class="animation" @mouseover="startAnimation" @mouseleave="resetAnimation">
        <img :src="blok.image.filename" :alt="blok.image.alt">
        <div class="overlay"></div>
      </div>

      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">

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

defineProps({
  blok: Object
});

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
  background-color: white;
  transform: translateY(100%);
  transition: transform 1s;
}

.overlay::before {
  content: "show project";
  white-space: nowrap;
  position: absolute;
  right: 0;
  @apply font-mono font-light uppercase text-xs mt-2 text-black;
}

.animation:hover .overlay {
  transform: translateY(90%);
}
</style>