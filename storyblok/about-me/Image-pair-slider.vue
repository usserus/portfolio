<template>
    <div v-editable="blok" class="container mx-auto px-4 py-6 lg:py-20 font-mono font-normal mt-0 sm:mt-6">
        <div class="grid grid-cols-1 sm:grid-cols-5 items-end gap-0 sm:gap-4 md:gap-6">

            <!-- Linkes Bild/Slider -->
            <div class="image-left-container col-span-2 overflow-hidden mb-4 sm:mb-0">
                <swiper-container ref="leftSwiperOptions" :init="false" class="image-left">
                    <swiper-slide v-for="(slide, idx) in blok?.slider_left" :key="idx">
                        <img :src="slide.image.filename" class=" w-full h-full object-cover grayscale contrast-[1.1]">
                    </swiper-slide>
                </swiper-container>
            </div>

            <!-- Rechtes Bild/Block -->
            <div class="col-span-3 image-right-container">
                <div class="overflow-hidden mb-4 image-right">
                    <swiper-container ref="rightSwiperOptions" :init="false">
                        <swiper-slide v-for="(slide, idx) in blok?.slider_right" :key="idx"
                            class="flex flex-row items-end">
                            <img :src="slide.image.filename"
                                class="w-full h-full object-cover grayscale contrast-[1.1]">
                        </swiper-slide>
                    </swiper-container>
                    <div class="text-3xl uppercase">{{ blok.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps({
    blok: Object
})

const leftSwiperOptions = ref(null)
const leftSwiper = useSwiper(leftSwiperOptions, {
    loop: false,
    pagination: { type: 'fraction' },
    effect: 'coverflow',
    autoHeight: true,
});

const rightSwiperOptions = ref(null)
const rightSwiper = useSwiper(rightSwiperOptions, {
    loop: false,
    pagination: { type: 'fraction' },
    effect: 'coverflow',
    autoHeight: true,
});

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".image-left", {
        y: -50,
        scrollTrigger: {
            trigger: ".image-left-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    gsap.to(".image-right", {
        y: -30,
        scrollTrigger: {
            trigger: ".image-right-container",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
})

</script>
