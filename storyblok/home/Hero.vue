<template>

  <div class="container mx-auto mb-12 px-4 pt-32 lg:pt-44">
    <div v-editable="blok">
      <h2 class="text-base font-mono font-light uppercase">{{ blok.subheadline }}</h2>
      <hr class="h-px mt-2 mb-3 bg-gray-500 border-0  w-1/4">
      <h1
        class="lg:w-3/4 text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-mono font-normal uppercase tracking-tighter [word-spacing:-0.4em]">
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