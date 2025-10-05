<template>
  <div class="container mx-auto px-4 py-6 lg:py-16 font-mono font-normal">
    <h1 class="text-5xl my-6">{{ blok.heading }}</h1>
    <p class="mb-10">{{ blok.description }}</p>
    <div v-editable="blok" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 pb-10">
      <StoryblokComponent v-for="blok in blok.content" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
