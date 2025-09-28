<template>
    <div class="container mx-auto px-4 py-6 font-mono font-normal">
        <hr class="h-px bg-gray-400 border-0">
        <div v-editable="blok" class="grid sm:grid-cols-3 gap-6 mt-10">
            <div>
                <h2 class="text-5xl font-light">
                    {{ blok.heading }}
                </h2>
            </div>
            <div class="col-span-2">
                <p class="text-lg">
                    {{ blok.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
