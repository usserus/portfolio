<template>

  <div class="mx-auto py-6 lg:py-14 text-white font-mono font-light">

    <div class="grid lg:grid-cols-2">

      <div v-editable="blok" class="bg-gray-900 px-6 lg:px-28 pt-4">
        <div>
          <img :src="blok.image.filename" :alt="blok.image.alt">
        </div>
      </div>

      <div class="grid content-between px-6 py-10 lg:py-20 bg-black">
        <div v-editable="blok">
          <h1 class="text-5xl mb-10">{{ blok.heading }}</h1>
        </div>
        <div>
          <div v-html="articleContent" class="text-lg mb-10"></div>
          <NuxtLink to="/about-me"
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
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Read more about
              me</span>
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>

const props = defineProps({ blok: Object });
const articleContent = computed(() => renderRichText(props.blok.description));

</script>
