<template>
    <div class="font-mono font-light">
        <div v-editable="blok">
            <div class="text-sm uppercase mt-1 mb-2">
                {{ blok.year }}
            </div>
            <div class="text-2xl uppercase mt-1">
                {{ blok.title }}
            </div>

            <details>
                <summary class="cursor-pointer mt-2 text-sm">
                    read more..
                </summary>
                <div class="py-2 text-sm">
                    <p>{{ blok.description }}</p>
                </div>
            </details>
        </div>
        <hr class="h-px my-3 bg-gray-400 border-0">
    </div>
</template>

<script setup>

defineProps({
    blok: Object
});

</script>

<style scoped></style>
