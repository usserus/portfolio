<template>
  <div class="w-full">
    <div v-editable="blok">
      <div>
        <img :src="blok.image.filename" loading="lazy" class="w-full">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object
});
</script>
