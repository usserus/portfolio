<template>
  <div class="font-mono font-light">
    <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">
    <div v-editable="blok">
      <div class="text-xs uppercase mt-1 mb-2">
        {{ blok.heading }}
      </div>

      <div class="text-xl">
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
