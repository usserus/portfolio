<template>

  <div class="mx-auto py-6 lg:py-14 text-white font-mono font-light">

    <div class="grid lg:grid-cols-2">

      <div v-editable="blok" class="bg-gray-900 px-6 lg:px-28 pt-4">
        <div>
          <img :src="blok.image.filename" :alt="blok.image.alt">
        </div>
      </div>

      <div class="grid content-between lg:text-lg px-6 py-10 lg:py-20 bg-black">
        <div v-editable="blok">
          <h1 class="text-5xl mb-10">{{ blok.heading }}</h1>
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
