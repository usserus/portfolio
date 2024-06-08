<template>
  <div
      v-editable="blok"
      class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
  >
    <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<script setup>
defineProps({blok: Object})
</script>
