<template>
  <div class="container mx-auto px-4 py-10 lg:py-14 font-mono font-normal">

    <div class="grid lg:grid-cols-2 gap-4 lg:mt-8">
      <div class="w-3/4">
        <h1 v-editable="blok" class="text-5xl mb-6">
          {{ blok.heading }}
        </h1>
      </div>

      <div class="grid lg:grid-cols-2 gap-4 lg:my-0 my-4">
        <StoryblokComponent v-for="blok in blok.features" :key="blok._uid" :blok="blok" />
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
