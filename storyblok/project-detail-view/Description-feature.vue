<template>
  <div v-editable="blok" class="font-mono font-light">

    <div class="mt-8 underline"></div>
    <div class="text-xl uppercase mt-1">
      {{ blok.heading }}
    </div>

    <div v-html="articleContent" class="text-m mt-4"></div>

    <a v-if="blok?.link?.url" class="mt-5 inline-block" :href="blok?.link?.url" target="_blank"
      rel="noopener noreferrer">
      <span class="border p-2 hover:bg-white hover:text-black">
        {{ blok?.link?.url }}
      </span>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const articleContent = computed(() => renderRichText(props.blok.description));
</script>

<style scoped>
.underline {
  height: 1px;
  background-color: #e5ded5;
}
</style>