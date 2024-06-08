<template>

  <div>
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">
    <div v-editable="blok">
      <div class="text-xs font-mono font-light uppercase mt-1">
        {{ blok.heading }}
      </div>

      <div class="text-xl font-mono font-light">
        {{ blok.description }}
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