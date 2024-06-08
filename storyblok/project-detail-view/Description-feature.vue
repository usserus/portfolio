<template>
  <div v-editable="blok">

    <div class="mt-6 underline"></div>
    <div class="text-xl font-mono font-light uppercase mt-1">
      {{ blok.heading }}
    </div>

    <div class="text-m font-mono font-light mt-4">
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