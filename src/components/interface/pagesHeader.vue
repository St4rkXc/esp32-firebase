<script setup lang="ts">

const { pages, description } = defineProps<{
    pages: string
    description: string
}>()
</script>

<template>
    <header class="flex flex-col gap-2 md:gap-0 md:flex-row justify-between xl:items-center">
        <div>
            <p class="text-zinc-800 text-2xl font-bold">{{ pages }}</p>
            <p class="text-base text-zinc-400 font-base">
                {{ description }}
            </p>
        </div>
        <div>
            <p class="text-zinc-800 text-base font-medium">
                Last updated: {{ new Date().toLocaleString() }}
            </p>
        </div>
    </header>
</template>
