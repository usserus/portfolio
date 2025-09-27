<template>
    <div v-editable="blok" class="container mx-auto px-4 py-6 lg:py-14 font-mono font-normal mt-10">
        <div class="flex flex-col sm:flex-row gap-6">
            <div class="w-full sm:w-1/2 lg:w-1/4">
                <img :src="blok.image.filename" :alt="blok.image.alt">
            </div>
            <h1 class="xl:w-2/4 text-3xl lg:text-7xl font-mono font-light">
                {{ blok.heading }}</h1>
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
