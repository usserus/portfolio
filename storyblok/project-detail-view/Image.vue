<template>
  <div class="container mx-auto w-4/5 lg:w-3/5 py-14">
    <div v-editable="blok">
      <img :src="blok.image.filename" :alt="blok.image.alt" class="">
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object
});
</script>



