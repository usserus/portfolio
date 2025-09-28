<template>
    <div v-editable="blok" class="container mx-auto px-4 py-6 font-mono font-normal mt-0 sm:mt-6">
        <div class="grid grid-cols-1 sm:grid-cols-5 items-end gap-0 sm:gap-4 md:gap-6">

            <!-- Linkes Bild/Slider -->
            <div class="col-span-2 overflow-hidden mb-4 sm:mb-0">
                <swiper-container ref="leftSwiperOptions" :init="false">
                    <swiper-slide v-for="(slide, idx) in blok?.slider_left" :key="idx">
                        <img :src="slide.image.filename" class="w-full h-full object-cover">
                    </swiper-slide>
                </swiper-container>
            </div>

            <!-- Rechtes Bild/Block -->
            <div class="col-span-3">
                <div class="overflow-hidden mb-4">
                    <swiper-container ref="rightSwiperOptions" :init="false">
                        <swiper-slide v-for="(slide, idx) in blok?.slider_right" :key="idx"
                            class="flex flex-row items-end">
                            <img :src="slide.image.filename" class="w-full h-full object-cover">
                        </swiper-slide>
                    </swiper-container>
                </div>
                <div class="text-3xl">{{ blok.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>

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

</script>
