<template>
    <nav
        class="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-xs shadow-2xl shadow-black z-50 flex flex-row">
        <div v-for="(item, index) in menuItems" :key="index" @click="setActive(index)"
            class="m-1 px-2 py-1 uppercase cursor-pointer transition-colors duration-300 ease-in-out"
            :class="activeIndex === index ? 'bg-black text-white' : 'bg-white text-black'">
            <a :href="item.href">{{ item.label }}</a>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const menuItems = [
    { label: 'ABOUT', href: '#intro-section' },
    { label: 'Work', href: '#work-experience' },
    { label: 'Education', href: '#education' },
]

const activeIndex = ref(0);

const setActive = (index: number) => {
    const target = document.querySelector(menuItems[index].href)
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
        activeIndex.value = index
    }
}

</script>
