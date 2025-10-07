<template>
    <div class="container mx-auto w-full lg:w-3/5 relative flex flex-col items-center justify-center p-4">
        <h2 class="mb-4 text-xl font-mono font-light uppercase">{{ blok.description }}</h2>
        <div v-if="iframeSrc" class="w-full aspect-video ">
            <iframe :src="iframeSrc" class="w-full h-full" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen loading="lazy"></iframe>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';

// Props von Storyblok
const props = defineProps({
    blok: Object
})

const isLoaded = ref(false)
const isPlaying = ref(false)

// iframe src bauen
const iframeSrc = computed(() => {
    if (!props?.blok?.link.url) return ''
    return props.blok.link.url;
})

function loadVideo() {
    isLoaded.value = true
    isPlaying.value = true
}

</script>