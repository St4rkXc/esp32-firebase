<script setup lang="ts">


defineProps<{
    Data: number;
    Label: string;
}>();
</script>

<template>
    <div class="px-12 py-6 rounded-xl shadow-sm border border-zinc-300  ">
        <div class="flex  justify-center flex-col">
            <p class="text-zinc-600 font-medium text-xl">{{ Label }}</p>
            <p :class="[Data > 50 ? 'text-green-300' : 'text-red-300', 'text-2xl font-medium']">{{ Data }} %</p>
        </div>
    </div>
</template>