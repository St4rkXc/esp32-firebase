<script setup lang="ts">
import lineChart from '@/components/charts/lineChart.vue'

defineProps<{
    DataTemp: number
    DataHum: number
    label1: string
    label2: string
    ttile: string
    sector: string
}>()
</script>

<template>
    <div class="p-8 border rounded-xl shadow-sm" :class="[DataTemp > 25 && DataHum < 50 ? 'border-rose-600 border-2' : 'border-zinc-200 border']">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="text-center md:text-start my-4 md:my-0">
                <p class="text-zinc-800 text-2xl font-semibold">{{ ttile }}</p>
                <p class="text-zinc-500 text-base font-base">{{ sector }}</p>
            </div>
            <div class="flex items-center gap-6 w-full md:w-fit">
                <div class="flex flex-col justify-center items-center w-full">
                    <p class="text-2xl font-semibold" :class="DataHum < 50 ? 'text-rose-600' :'text-zinc-800'">{{ DataHum }} %</p>
                    <div class="flex gap-1 items-center">
                        <div class="rounded-full bg-zinc-800 w-3 h-3"></div>
                        <p class="text-base text-zinc-400 font-semibold">{{ label1 }}</p>
                    </div>
                </div>
                <div class="h-16 w-[1px] bg-zinc-200"></div>
                <div class="flex flex-col justify-center items-center w-full">
                    <p class="text-2xl  font-semibold" :class="[DataTemp > 25 ? 'text-rose-600' : 'text-zinc-800']">{{ DataTemp }} C</p>
                    <div class="flex gap-1 items-center">
                        <div class="rounded-full bg-zinc-400 w-3 h-3"></div>
                        <p class="text-base text-zinc-400 font-semibold">{{ label2 }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <lineChart
                :firstData="DataHum"
                :secondData="DataTemp"
                :label1="label1"
                :label2="label2"
                class="h-[400px] mt-8"
            />
        </div>
        <p class="text-zinc-800 text-base font-base mt-4">
            Status :
            <span v-if="DataTemp > 25 && DataHum < 50" class="text-rose-600 font-medium"
                >Alert! Kondisi Tanaman Kritis
            </span>
            <span v-else-if="DataTemp > 25 || DataHum < 50" class="text-amber-500 font-medium"
                >Warning! Tanaman Perlu Tindakan</span
            >
            <span v-else class="text-zinc-600">Tanaman Stabil, Tidak Perlu Tindakan</span>
        </p>
    </div>
</template>
