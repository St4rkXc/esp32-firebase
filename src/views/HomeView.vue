<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { database } from '@/firebaseConfig' // Adjust the path as necessary
import { ref as dbRef, onValue } from 'firebase/database'
import LineChart from '@/components/charts/lineChart.vue'

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
})
</script>

<template>
    <div class="container mx-auto">
        <h1>Firebase Data Fetch Example</h1>
        <p>Value from Humidity: {{ humiditySensorData }} %</p>
        <p>Value from Temp Sensor: {{ tempSensorData }} %</p>
        <div class="mt-12">
            <LineChart :humidity="humiditySensorData" :temperature="tempSensorData" />
        </div>
    </div>
</template>
