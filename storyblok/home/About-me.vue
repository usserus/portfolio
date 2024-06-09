<template>
  <div class="container mx-auto px-4 py-6 lg:py-14 font-mono font-normal">

    <div class="grid lg:grid-cols-2 gap-4 lg:mt-8">
      <h2 v-editable="blok" class="w-3/4 text-5xl">
        {{ blok.heading }}
      </h2>

      <div class="grid lg:grid-cols-2 gap-4 lg:my-0 my-4">
        <StoryblokComponent v-for="blok in blok.features" :key="blok._uid" :blok="blok"/>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({blok: Object})
</script>
