<template>
  <div v-editable="blok" class="font-mono font-light">

    <div class="mt-8 underline"></div>
    <div class="text-xl uppercase mt-1">
      {{ blok.heading }}
    </div>

    <div class="text-m mt-4">
      {{ blok.description }}
    </div>

  </div>
</template>

<script setup>
defineProps({
  blok: Object
});
</script>

<style scoped>
.underline {
  height: 1px;
  background-color: #e5ded5;
}
</style>