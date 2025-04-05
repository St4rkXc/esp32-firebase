<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    DataHum: number
    DataTemp: number
    Label: string
}>()

const HumTemp = computed(() => props.DataHum + props.DataTemp / 2)
console.log(`Data Status: ${HumTemp.value}`)
</script>

<template>
    <div class="p-6 py-12 rounded-xl shadow-sm border" :class="[props.DataTemp > 25 && props.DataHum < 50 ? 'border-rose-600 border-2' : 'border-zinc-200 border']">
        <div class="flex gap-4 items-center justify-center mb-6 w-full">
            <div class="text-center">
                <p class="text-zinc-800 text-xl font-semibold">{{ props.Label }}</p>
                <p class="text-zinc-800 text-base font-base">Status :
                    <span v-if="DataTemp > 25 && DataHum < 50 " class="text-rose-600">Warning! Tanaman Perlu Tindakan </span>
                    <span v-else-if="DataTemp > 25 || DataHum < 50 " class="text-amber-500">Alert! Tanaman Perlu Tindakan</span>
                    <span v-else class="text-zinc-600">Tanaman Stabil, Tidak Perlu Tindakan</span>
                </p>
            </div>
        </div>
        <div class="flex gap-3 items-center">
            <div class="flex-1 text-center">
                <div class="text-[48px] font-semibold" :class="[DataTemp > 25 ? 'text-rose-600' : 'text-zinc-800']">{{ DataTemp }} C</div>
                <div class="text-base text-zinc-400 font-semibold">Temperature</div>
            </div>
            <div class="h-16 w-[1px] bg-zinc-200"></div>
            <div class="flex-1 text-center">
                <div class="text-[48px]  font-semibold" :class="[DataHum < 50 ? 'text-rose-600' : 'text-zinc-800']"> {{ DataHum }} %</div>
                <div class="text-base text-zinc-400 font-semibold">Humidity</div>
            </div>
        </div>
    </div>
</template>
