<template>

  <footer class="text-center font-mono font-light cursor-pointer">
    <div @click="goBack()">
      <hr class="h-px bg-gray-500 border-0">
      <div class="bg-white py-6">
        <Icon name="tdesign:caret-up" color="black" />
        <div class="text-xs text-black">Back to top</div>
      </div>
    </div>

    <div class="p-4 bg-black text-white text-sm">
      © 2025 Copyright: <a href="/">Emil Düringer</a>
    </div>

  </footer>

</template>

<script setup lang="ts">
const goBack = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>