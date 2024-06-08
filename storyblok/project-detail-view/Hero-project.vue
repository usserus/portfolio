<template>
  <div class="container mx-auto w-full mb-12">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-8">
      <div v-editable="blok"
           class="w-full md:w-3/4 lg:text-6xl mt-20 mb-6 lg:mb-14 font-mono font-normal uppercase">
        <h1>{{ blok.heading }}</h1>
        <div class="mt-6 w-2/3 underline"></div>
      </div>

      <div v-editable="blok"
           class="w-full md:w-3/4 text-xs font-mono font-normal uppercase text-right flex justify-end items-end flex-col">
        <div v-html="articleContent"></div>
        <div class="bg-black mt-6 w-2/3 underline"></div>
      </div>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({blok: Object});
const articleContent = computed(() => renderRichText(props.blok.description));

</script>


<style scoped>
.underline {
  height: 1px;
  background-color: #e5ded5;
}
</style>