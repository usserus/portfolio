<template>
    <nav
        class="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-xs shadow-2xl shadow-black z-50 flex flex-row">
        <div v-for="(item, index) in menuItems" :key="index" @click="scrollToSection(index)"
            class="m-1 px-2 py-1 uppercase cursor-pointer transition-colors duration-300 ease-in-out"
            :class="activeIndex === index ? 'bg-black text-white' : 'bg-white text-black'">
            <a :href="item.href">{{ item.label }}</a>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

const menuItems = [
    { label: 'About', href: '#intro-section' },
    { label: 'Work', href: '#work-experience' },
    { label: 'Education', href: '#education' },
]

const activeIndex = ref(0);

const scrollToSection = (index) => {
    const target = document.querySelector(menuItems[index].href);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

const sectionObservers = ref([]);

onMounted(() => {
    menuItems.forEach((item, index) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        useIntersectionObserver(
            section,
            ([entry]) => {
                if (entry.intersectionRatio > 0.5) {
                    activeIndex.value = index
                }
            },
            {
                threshold: [0.5],
            }
        )
        sectionObservers.value.push(stop);
    });
});

</script>
