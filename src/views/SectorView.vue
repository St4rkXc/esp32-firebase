<script setup lang="ts">
import MainNavbar from '@/components/interface/mainNavbar.vue'
import PagesHeader from '@/components/interface/pagesHeader.vue'
import { useAvgStore } from '@/store/avgStore'
import { usePotStore } from '@/store/potStore'
import SingeLineChart from '@/components/charts/singeLineChart.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import singlePotData from '@/components/data/singlePotData.vue'

const avg = useAvgStore()
avg.fetchAvgData()

const pot = usePotStore()
pot.fetchPotData()

// console.log(pot.pots.pot6?.hum)
// console.log(avg.esp1humAVG)
</script>

<template>
    <MainNavbar />
    <div class="px-24 mt-4">
        <PagesHeader pages="Sector View" description="Overview of Detailed Sector Data" />
        <div class="flex flex-row gap-x-4 mt-4 max-h-[350px]">
            <!-- Humidity Sensor data -->
            <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit">
                <div class="flex justify-between items-start mb-4">
                    <div class="mb-4">
                        <p class="text-zinc-800 text-xl font-semibold">Humidity</p>
                        <p class="text-zinc-500 text-base font-base">
                            Average Humidity of Sector 1
                        </p>
                    </div>
                    <div>
                        <p class="text-zinc rounded text-2xl font-semibold">
                            {{ avg.esp1humAVG }} %
                        </p>
                    </div>
                </div>
                <SingeLineChart :firstData="avg.esp1humAVG" class="canvas-200" />
            </div>

            <!-- Temp Sensor Data -->
            <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit">
                <div class="flex justify-between items-start mb-4">
                    <div class="mb-4">
                        <p class="text-zinc-800 text-xl font-semibold">Temperature</p>
                        <p class="text-zinc-500 text-base font-base">
                            Average Temperature of Sector 1
                        </p>
                    </div>
                    <div>
                        <p class="text-zinc rounded text-2xl font-semibold">
                            {{ avg.esp1tempAVG }} C
                        </p>
                    </div>
                </div>
                <SingeLineChart :firstData="avg.esp1tempAVG" class="canvas-200" />
            </div>
            <!-- <SingeLineChart :firstData="humiditySensorData" /> -->
        </div>
        <div class="flex flex-row gap-x-4 max-h-[350px] my-16">
            <!-- Humidity Sensor data -->
            <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit">
                <div class="flex justify-between items-start mb-4">
                    <div class="mb-4">
                        <p class="text-zinc-800 text-xl font-semibold">Humidity</p>
                        <p class="text-zinc-500 text-base font-base">
                            Average Humidity of Sector 2
                        </p>
                    </div>
                    <div>
                        <keep-alive>
                            <p class="text-zinc rounded text-2xl font-semibold">
                                {{ avg.esp2humAVG }} %
                            </p>
                        </keep-alive>
                    </div>
                </div>
                <SingeLineChart :firstData="avg.esp2humAVG" class="canvas-200" />
            </div>

            <!-- Temp Sensor Data -->
            <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300 h-fit ">
                <div class="flex justify-between items-start mb-4">
                    <div class="mb-4">
                        <p class="text-zinc-800 text-xl font-semibold">Temperature</p>
                        <p class="text-zinc-500 text-base font-base">
                            Average Temperature of Sector 2
                        </p>
                    </div>
                    <div>
                        <keep-alive>
                            <p class="text-zinc rounded text-2xl font-semibold">
                                {{ avg.esp2tempAVG }} C
                            </p>
                        </keep-alive>
                    </div>
                </div>
                <SingeLineChart :firstData="avg.esp2tempAVG" class="canvas-200" />
            </div>
            <!-- <SingeLineChart :firstData="humiditySensorData" /> -->
        </div>
        <Tabs default-value="sector1" class="">
            <TabsList class="rounded-[5px]">
                <TabsTrigger value="sector1" class="rounded-[5px]"> Sector 1 </TabsTrigger>
                <TabsTrigger value="sector2" class="rounded-[5px]"> Sector 2 </TabsTrigger>
            </TabsList>
            <TabsContent value="sector1" class="my-4">
                <div class="grid grid-cols-3 gap-4">
                    <singlePotData Label="Tanaman Cabe 1" :DataHum="pot.pots.pot1?.hum" :DataTemp="pot.pots.pot1?.temp"/>
                    <singlePotData Label="Tanaman Cabe 2" :DataHum="pot.pots.pot2?.hum" :DataTemp="pot.pots.pot2?.temp"/>
                    <singlePotData Label="Tanaman Cabe 3" :DataHum="pot.pots.pot3?.hum" :DataTemp="pot.pots.pot3?.temp"/>
                    <singlePotData Label="Tanaman Cabe 4" :DataHum="pot.pots.pot4?.hum" :DataTemp="pot.pots.pot4?.temp"/>
                    <singlePotData Label="Tanaman Cabe 5" :DataHum="pot.pots.pot5?.hum" :DataTemp="pot.pots.pot5?.temp"/>
                </div>
            </TabsContent>
            <TabsContent value="sector2" class="my-4"> 
                <div class="grid grid-cols-3 gap-4">
                    <singlePotData Label="Tanaman Cabe 6" :DataHum="pot.pots.pot6?.hum" :DataTemp="pot.pots.pot6?.temp"/>
                    <singlePotData Label="Tanaman Cabe 7" :DataHum="pot.pots.pot7?.hum" :DataTemp="pot.pots.pot7?.temp"/>
                    <singlePotData Label="Tanaman Cabe 8" :DataHum="pot.pots.pot8?.hum" :DataTemp="pot.pots.pot8?.temp"/>
                    <singlePotData Label="Tanaman Cabe 9" :DataHum="pot.pots.pot9?.hum" :DataTemp="pot.pots.pot9?.temp"/>
                    <singlePotData Label="Tanaman Cabe 10" :DataHum="pot.pots.pot10?.hum" :DataTemp="pot.pots.pot10?.temp"/>
                </div>
            </TabsContent>
        </Tabs>
    </div>
</template>
