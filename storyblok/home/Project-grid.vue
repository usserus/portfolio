<template>
  <div class="container mx-auto px-4">
    <div v-editable="blok" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-10">
      <StoryblokComponent v-for="blok in blok.columns" :key="blok._uid" :blok="blok" />
    </div>
    <div class="flex flex-row justify-center items-center gap-2">
      <div>
        <NuxtLink to="/projects"
          class="relative px-4 py-2 overflow-hidden text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group">
          <span
            class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
          <span
            class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
          <span
            class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span
            class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
          <span
            class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
          <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">All
            Projects</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
<style scoped></style>