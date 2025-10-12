<template>
  <div v-editable="blok">
    <img :src="blok.image.filename" loading="lazy" class="w-full h-auto object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  blok: Object
});
</script>