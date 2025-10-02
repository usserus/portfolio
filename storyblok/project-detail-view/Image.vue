<template>
  <div v-editable="blok">
    <img :src="blok.image.filename" class="w-full h-auto object-cover" />
  </div>
</template>

<script setup>
defineProps({
  blok: Object
});
</script>