<template>
  <div class="container mt-24 mb-14 grid lg:grid-cols-3 gap-2">

    <div class="col-span-1"></div>
    <div class="col-span-2">
      <StoryblokComponent v-for="blok in blok.features" :key="blok._uid" :blok="blok"/>
    </div>

  </div>
</template>

<script setup>
defineProps({blok: Object})
</script>
