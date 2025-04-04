<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { database } from '@/firebaseConfig' // Adjust the path as necessary
import { ref as dbRef, onValue } from 'firebase/database'
import LineChart from '@/components/charts/lineChart.vue'
import dataLabel from '@/components/data/dataLabel.vue'
import SingeLineChart from '@/components/charts/singeLineChart.vue'
import mainNavbar from '@/components/mainNavbar.vue'

const humiditySensorData = ref<number | undefined>(undefined)
const tempSensorData = ref<number | undefined>(undefined)

const fetchDataFire = () => {
    const dataRef = dbRef(database, 'test/random')
    const dataRef2 = dbRef(database, 'test/random2')
    onValue(dataRef, (snapshot) => {
        humiditySensorData.value = snapshot.val()
    })
    onValue(dataRef2, (snapshot) => {
        tempSensorData.value = snapshot.val()
    })
}

onMounted(() => {
    fetchDataFire()
    // console.log('Fetching data from Firebase on Mounted')
})
</script>

<template>
    <mainNavbar />
    <div class=" px-24">
        <div class="mt-4">
            <div class="flex row justify-between items-center">
                <div>
                    <p class="text-zinc-800 text-2xl font-bold">Dashboard</p>
                    <p class="text-base text-zinc-400 font-base">Place to see all of your garden information</p>
                </div>
                <div>
                    <p class="text-zinc-800 text-base font-medium">Last updated: {{ new Date().toLocaleString() }}</p>
                </div>
            </div>
            <div class="grid grid-cols-4 gap-4 mt-4">
                <dataLabel :Data="humiditySensorData ?? 0" Label="Humidity" type="percent" desc="Kelembapan tanah" :lowest="50" class="flex-1" />
                <dataLabel :Data="tempSensorData ?? 0" Label="Temperature" desc="Suhu udara" type="celcius" :lowest="25" class="flex-1"/>
                <dataLabel :Data="humiditySensorData ?? 0" Label="Humidity" type="percent" desc="Kelembapan tanah" :lowest="50" class="flex-1" />
                <dataLabel :Data="tempSensorData ?? 0" Label="Temperature" desc="Suhu udara" type="celcius" :lowest="25" class="flex-1"/>
            </div>
            <div class=" w-full p-6 rounded-xl shadow-sm border border-zinc-200 mt-4 flex flex-col gap-4">
                <div class="flex flex-row justify-between items-center">
                    <div>
                        <p class="text-zinc-800 text-xl font-semibold">Overview</p>
                        <p class="text-zinc-500 text-base font-base">Avrage Temperature & Humidity of all Sector</p>
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
                <div class="h-[300px]">
                    <LineChart 
                    :firstData="humiditySensorData" 
                    :secondData="tempSensorData" 
                    label1="Humidity"
                    label2="Temperature"
                    />
                </div>
            </div>
            <div class="flex flex-row gap-x-4 mt-4">
                <!-- Humidity Sensor data -->
                <div class="w-full space-y-3 flex flex-col">
                    <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300">
                        <div class="flex justify-between items-start mb-4">
                            <div class="mb-4">
                                <p class="text-zinc-800 text-xl font-semibold">Humidity</p>
                                <p class="text-zinc-500 text-base font-base">Avrage Humidity of all Sector</p>
                            </div>
                            <div>
                                <p class=" text-zinc rounded text-2xl font-semibold">{{ humiditySensorData }} %</p>
                            </div>
                        </div>
                        <SingeLineChart :firstData="humiditySensorData" />
                    </div>
                </div>
                <!-- Temp Sensor Data -->
                <div class="w-full space-y-3 flex flex-col">
                    <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300">
                        <div class="flex justify-between items-start mb-4">
                            <div class="mb-4">
                                <p class="text-zinc-800 text-xl font-semibold">Temperature</p>
                                <p class="text-zinc-500 text-base font-base">Avrage Temperature of all Sector</p>
                            </div>
                            <div>
                                <p class=" text-zinc rounded text-2xl font-semibold">{{ tempSensorData }} C</p>
                            </div>
                        </div>
                        <SingeLineChart :firstData="tempSensorData" />
                    </div>
                </div>
                <!-- <SingeLineChart :firstData="humiditySensorData" /> -->
            </div>
        </div>
    </div>
</template>
