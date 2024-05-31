<template>

  <div class="container">
    <div v-editable="blok">
      <h1 class="text-6xl mt-32 font-regular font-mono ml-6">{{ blok.headline }}</h1>
    </div>
  </div>

</template>


<script setup>
defineProps({blok: Object})
</script>


<style scoped>

</style>