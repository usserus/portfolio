<template>
  <div v-editable="blok" class="font-mono font-light">

    <div class="mt-8 underline"></div>
    <div class="text-xl uppercase mt-1">
      {{ blok.heading }}
    </div>

    <div v-html="articleContent" class="text-m mt-4"></div>

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