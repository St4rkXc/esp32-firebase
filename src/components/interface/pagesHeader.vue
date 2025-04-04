<script setup lang="ts">

const props = defineProps<{
    pages: string
    description: string
}>()
</script>

<template>
    <header class="flex row justify-between items-center">
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
