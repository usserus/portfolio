<template>
    <div class="container mx-auto px-4 py-6 lg:py-14 font-mono font-normal mt-10">
        <h2>{{ blok.heading }}</h2>
        <h3>{{ blok.subheading }}</h3>
        <StoryblokComponent v-for="blok in blok.milestones" :key="blok._uid" :blok="blok" />
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
