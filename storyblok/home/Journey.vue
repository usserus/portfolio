<template>

  <div class="w-full mx-auto pt-20 text-white font-mono font-light">

    <div class="grid lg:grid-cols-2">
      <div v-editable="blok" class="bg-gray-900 px-6 pt-4">
        <div>
          <img :src="blok.image.filename" :alt="blok.image.alt" class="">
        </div>
      </div>

      <div class="grid content-between px-6 py-20 bg-black">
        <div v-editable="blok">
          <h1 class="text-5xl">{{ blok.heading }}</h1>
        </div>
        <div v-html="articleContent"></div>
      </div>
    </div>

  </div>


</template>

<script setup>

const props = defineProps({blok: Object});

const articleContent = computed(() => renderRichText(props.blok.description));

</script>

<style scoped>

.marquee {
  overflow: hidden;
  white-space: nowrap;
}

.marquee h1 {
  animation: scroll-left 12s linear infinite;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

</style>
