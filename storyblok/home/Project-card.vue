<template>
  <div v-editable="blok">

    <a :href="blok.link && blok.link.story ? blok.link.story.url: '#'">

      <div class="animation" @mouseover="startAnimation" @mouseleave="resetAnimation">
        <img :src="blok.image.filename" :alt="blok.image.alt">
        <div class="overlay"></div>
      </div>

      <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">

      <div class="text-xs font-mono font-light uppercase mt-1">
        {{ blok.subheading }}
      </div>

      <div class="text-xl font-mono font-light uppercase">
        {{ blok.heading }}
      </div>

    </a>
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
  background-color: black;
  transform: translateY(100%); /* Startposition unten */
  transition: transform 1s; /* Übergangseigenschaft */
}

.overlay::before {
  content: "show project";
  position: absolute;
  left: 50%;
  @apply font-mono font-normal uppercase text-xs mt-2 text-white;
}

.animation:hover .overlay {
  transform: translateY(90%); /* Endposition oben (50% des Bildes) */
}

</style>