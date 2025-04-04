<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { database } from '@/firebaseConfig' // Adjust the path as necessary
import { ref as dbRef, onValue } from 'firebase/database'
import LineChart from '@/components/charts/lineChart.vue'
import dataLabel from '@/components/data/dataLabel.vue'
import SingeLineChart from '@/components/charts/singeLineChart.vue'

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
    <div class="container mx-auto px-3">
        <div class="mt-12">
            <p class="text-zinc-800 text-xl font-medium">ESP32 : Garden monitoring</p>
            <p class="text-base text-zinc-400 font-base">Tanaman Cabe Rawit</p>
            <div class="h-[400px] w-full p-6 rounded-xl shadow-sm border border-zinc-300 mt-8">
                <LineChart 
                :firstData="humiditySensorData" 
                :secondData="tempSensorData" 
                label1="Humidity"
                label2="Temperature"
                />
            </div>
            <div class="flex flex-row gap-x-4 mt-8">
                <!-- Humidity Sensor data -->
                <div class="w-full space-y-3 flex flex-col">
                    <dataLabel :Data="humiditySensorData ?? 0" Label="Humidity" type="percent" class="flex-1" />
                    <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300">
                        <div class="flex justify-between items-start mb-4">
                            <p class="text-zinc-800 text-xl font-semibold">Humidity</p>
                            <div>
                                <p class=" text-zinc rounded text-2xl font-semibold">{{ humiditySensorData }} %</p>
                            </div>
                        </div>
                        <SingeLineChart :firstData="humiditySensorData" />
                    </div>
                </div>
                <!-- Temp Sensor Data -->
                <div class="w-full space-y-3 flex flex-col">
                    <dataLabel :Data="tempSensorData ?? 0" Label="Temperature" type="celcius" class="flex-1"/>
                    <div class="w-full p-6 rounded-xl shadow-sm border border-zinc-300">
                        <div class="flex justify-between items-start mb-4">
                            <p class="text-zinc-800 text-xl font-semibold">Temp</p>
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
