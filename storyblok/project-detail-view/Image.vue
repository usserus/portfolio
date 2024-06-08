<template>

  <div class="container mx-auto w-4/5 lg:w-3/5 mt-32 mb-32">
    <div class="">
      <div v-editable="blok">
        <div>
          <img :src="blok.image.filename" :alt="blok.image.alt" class="">
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

defineProps({
  blok: Object
});

</script>


<style scoped>

</style>




