<template>
  <div class="w-full">
    <div v-editable="blok">
      <div>
        <img :src="blok.image.filename" :alt="blok.image.alt">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object
});
</script>




