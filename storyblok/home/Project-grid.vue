<template>
  <div class="container px-4 mx-auto ">
    <div v-editable="blok" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">

      <StoryblokComponent v-for="blok in blok.columns" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
