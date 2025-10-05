<template>
    <div v-editable="blok" class="container mx-auto px-4 w-full lg:w-3/5 py-6 sm:py-8 xl:py-10">
        <div>
            <swiper-container ref="swiperOptions" :init="false" class="w-full my-swiper">
                <swiper-slide v-for="(slide, idx) in blok?.slides" :key="idx" class="flex justify-center items-center">
                    <Image :blok="slide" />
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    blok: Object
});

const swiperOptions = ref(null);
const swiper = useSwiper(swiperOptions, {
    loop: true,
    spaceBetween: 50,
    pagination: { type: 'fraction' },
    navigation: true,
    autoHeight: true,
});

</script>

<style></style>
