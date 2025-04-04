<script setup lang="ts">
import MainNavbar from '@/components/interface/mainNavbar.vue'
import PagesHeader from '@/components/interface/pagesHeader.vue'
import { useAvgStore } from '@/store/avgStore'
import SingeLineChart from '@/components/charts/singeLineChart.vue'

const avg = useAvgStore()
avg.fetchAvgData()

console.log(avg.esp1humAVG)
</script>

<template>
    <MainNavbar />
    <div class="px-24 mt-4">
        <PagesHeader pages="Dashboard" description="Overview of all data" />
        <div class="flex flex-row gap-x-4 mt-4 max-h-[350px]">
                <!-- Humidity Sensor data -->
                <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit">
                    <div class="flex justify-between items-start mb-4 ">
                        <div class="mb-4">
                            <p class="text-zinc-800 text-xl font-semibold">Humidity</p>
                            <p class="text-zinc-500 text-base font-base">Average Humidity of all Sector</p>
                        </div>
                        <div>
                            <p class=" text-zinc rounded text-2xl font-semibold">{{ avg.allhumAVG }} %</p>
                        </div>
                    </div>
                    <SingeLineChart :firstData="avg.allhumAVG" class="canvas-200" />
                </div>
                
                <!-- Temp Sensor Data -->
                <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit">
                    <div class="flex justify-between items-start mb-4">
                        <div class="mb-4">
                            <p class="text-zinc-800 text-xl font-semibold">Temperature</p>
                            <p class="text-zinc-500 text-base font-base">Average Temperature of all Sector</p>
                        </div>
                        <div>
                            <p class=" text-zinc rounded text-2xl font-semibold">{{ avg.alltempAVG }} C</p>
                        </div>
                    </div>
                    <SingeLineChart :firstData="avg.alltempAVG" class="canvas-200" />
                </div>
                <!-- <SingeLineChart :firstData="humiditySensorData" /> -->
            </div>
    </div>
</template>
