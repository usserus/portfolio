<template>
    <div class="container mx-auto relative flex flex-col items-center justify-center p-5">
        <h2 class="mb-4 text-xl font-mono font-light uppercase">{{ blok.description }}</h2>
        <div v-if="!isLoaded" @click="loadVideo"
            class="relative w-full max-w-3xl aspect-video cursor-pointer flex items-center justify-center border border-gray-600">
            <div class="absolute inset-0 flex items-center justify-center">
                <svg height="48" width="68" viewBox="0 0 68 48">
                    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55
               C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26
               c0.78,2.93,2.49,5.41,5.42,6.19C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55
               c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00" />
                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                </svg>
            </div>
        </div>
        <div v-else class="w-full max-w-3xl aspect-video ">
            <iframe :src="iframeSrc" class="w-full h-full" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
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
    if (!props.blok.link.url) return ''
    return props.blok.link.url;
})

function loadVideo() {
    isLoaded.value = true
    isPlaying.value = true
}

</script>