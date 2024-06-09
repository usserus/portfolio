<template>
  <div class="container mx-auto w-10/12 my-32">
    <div v-editable="blok">
      <img :src="blok.image.filename" :alt="blok.image.alt">
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object
});
</script>
