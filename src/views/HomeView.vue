<script setup lang="ts">
import LineChart from '@/components/charts/lineChart.vue'
import dataLabel from '@/components/data/dataLabel.vue'
import SingeLineChart from '@/components/charts/singeLineChart.vue'
import mainNavbar from '@/components/interface/mainNavbar.vue'
import PagesHeader from '@/components/interface/pagesHeader.vue'
import { useAvgStore } from '@/store/avgStore'

const avg = useAvgStore()
avg.fetchAvgData()
console.log(avg.esp2tempAVG)



</script>

<template>
    <mainNavbar />
    <div class=" custom-container">
        <div class="mt-4 mb-4">
            <PagesHeader pages="Dashboard" description="Overview of all data" />
            <div class="grid grid-cols-1 md:grid-cols-2 min-[1280px]:grid-cols-2 min-[1440px]:grid-cols-4 gap-4 mt-4">
                <dataLabel :Data="avg.esp1humAVG ?? 0" Label="Humidity" type="percent" desc="Kelembapan tanah" sector="(S1)" :lowest="50" class="flex-1" />
                <dataLabel :Data="avg.esp1tempAVG ?? 0" Label="Temp" desc="Suhu udara" type="celcius" sector="(S1)" :lowest="25" class="flex-1"/>
                <dataLabel :Data="avg.esp2humAVG ?? 0" Label="Humidity" type="percent" desc="Kelembapan tanah" sector="(S2)" :lowest="50" class="flex-1" />
                <dataLabel :Data="avg.esp2tempAVG ?? 0" Label="Temp" desc="Suhu udara" type="celcius" sector="(S2)" :lowest="25" class="flex-1"/>
            </div>
            <div class=" w-full p-6 rounded-xl shadow-sm border border-zinc-200 mt-4 flex flex-col gap-4">
                <div class="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                    <div>
                        <p class="text-zinc-800 ext-xl font-semibold">Overview</p>
                        <p class="text-zinc-500 text-base font-base">Average Temperature & Humidity of all Sector</p>
                    </div>
                    <div class="flex flex-row gap-x-4">
                        <div class="flex flex-row gap-x-2 items-center">
                            <div class="rounded-full bg-zinc-800 w-4 h-4"></div>
                            <p class="text-base text-zinc-600">Humidity</p>
                        </div>
                        <div class="flex flex-row gap-x-2 items-center">
                            <div class="rounded-full bg-zinc-400 w-4 h-4"></div>
                            <p class="text-base text-zinc-600">Temperature</p>
                        </div>
                    </div>
                </div>
                <div class="h-fit xl:h-[300px]">
                    <keep-alive>
                        <LineChart 
                        :firstData="avg.allhumAVG" 
                        :secondData="avg.alltempAVG" 
                        label1="Humidity"
                        label2="Temperature"
                        class="h-fit"
                        />
                    </keep-alive>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-4 mt-4 h-[400px]">
                <!-- Humidity Sensor data -->
                <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit">
                    <div class="flex justify-between items-start mb-4">
                        <div class="mb-4 flex-1">
                            <p class="text-zinc-800 text-xl font-semibold">Humidity</p>
                            <p class="text-zinc-500 text-base font-base">Average Humidity of all Sector</p>
                        </div>
                        <div class="flex-1 text-end">
                            <p class=" text-zinc rounded text-[40px] md:text-2xl font-semibold">{{ avg.allhumAVG }} %</p>
                        </div>
                    </div>
                    <SingeLineChart :firstData="avg.allhumAVG" class="canvas-200" />
                </div>
                
                <!-- Temp Sensor Data -->
                <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit">
                    <div class="flex justify-between items-start mb-4">
                        <div class="mb-4 flex-1">
                            <p class="text-zinc-800 text-xl font-semibold">Temperature</p>
                            <p class="text-zinc-500 text-base font-base">Average Temperature of all Sector</p>
                        </div>
                        <div class="flex-1 text-end">
                            <p class=" text-zinc rounded text-[40px] md:text-2xl font-semibold">{{ avg.alltempAVG }} C</p>
                        </div>
                    </div>
                    <SingeLineChart :firstData="avg.alltempAVG" class="canvas-200" />
                </div>
                <!-- <SingeLineChart :firstData="humiditySensorData" /> -->
            </div>
        </div>
    </div>
</template>

