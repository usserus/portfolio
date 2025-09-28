<template>
    <div :class="blok.use_secondary_bg ? 'bg-white text-black' : ''">
        <div class="container mx-auto px-4 py-6 lg:py-14 font-mono font-normal mt-6">
            <hr class="h-px border-0 bg-gray-400">
            <div class="lg:grid grid-cols-3 gap-6 mt-10">
                <div>
                    <h2 class="sticky top-16 text-5xl font-light pb-6 lg:pb-0">
                        {{ blok.heading }}
                    </h2>
                </div>
                <div class="col-span-2">
                    <StoryblokComponent v-for="blok in blok.milestones" :key="blok._uid" :blok="blok" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
