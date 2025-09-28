<template>

  <div class="container mx-auto mb-12 px-4">
    <div v-editable="blok" class="mt-32 lg:mt-44">
      <h2 class="text-base font-mono font-light uppercase">{{ blok.subheadline }}</h2>
      <hr class="h-px mt-2 mb-3 bg-gray-500 border-0  w-1/4">
      <h1 class="lg:w-3/4 text-3xl lg:text-8xl font-mono font-normal uppercase tracking-tighter [word-spacing:-0.4em]">
        {{ blok.headline }}
      </h1>
    </div>
  </div>

</template>


<script setup>
defineProps({ blok: Object })
</script>


<style scoped>
.underline {
  height: 1px;
}
</style>