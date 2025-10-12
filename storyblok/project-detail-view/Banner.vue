<template>
  <div class="container mx-auto px-4 w-4/5 my-10 lg:my-32">
    <div v-editable="blok">
      <img :src="blok.image.filename" loading="lazy" class="w-full">
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object
});
</script>
