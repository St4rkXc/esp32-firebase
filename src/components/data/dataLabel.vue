<script setup lang="ts">


const props = defineProps<{
    Data: number;
    Label: string;
    type: string;
}>();
</script>

<template>
    <div class="px-12 py-6 rounded-xl shadow-sm border border-zinc-300  ">
        <div class="flex  justify-center flex-col">
            <p class="text-zinc-800 font-semibold text-xl">{{ Label }}</p>
            <div v-if="props.type === 'percent'">
                <p :class="[Data > 50 ? 'text-green-300' : 'text-red-300', 'text-2xl font-medium']">{{ Data }} %</p>
            </div>
            <div v-if="props.type === 'celcius'">
                <p :class="[Data > 50 ? 'text-green-300' : 'text-red-300', 'text-2xl font-medium']">{{ Data }} C</p>
            </div>
        </div>
    </div>
</template>