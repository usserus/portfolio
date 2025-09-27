<template>

    <div class="font-mono font-light">
        <hr class="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700">
        <div v-editable="blok">
            <div class="text-xs uppercase mt-1 mb-2">
                {{ blok.year }}
            </div>
            <div class="text-xl uppercase mt-1 mb-2">
                {{ blok.title }}
            </div>

            <details>
                <summary class="cursor-pointer text-md">
                    read more
                </summary>
                <div class="py-2 text-sm">
                    <p> {{ blok.description }}
                    </p>
                </div>
            </details>
        </div>
    </div>





</template>

<script setup>

defineProps({
    blok: Object
});

</script>

<style scoped>
details>summary {
    list-style: none;
}
</style>
