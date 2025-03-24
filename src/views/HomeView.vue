<script setup lang="ts">
import { BarChart } from '@/components/ui/chart-bar'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { database } from '@/firebaseConfig'; // Adjust the path as necessary
import { ref as dbRef, onValue } from 'firebase/database';


const data = [
    {
        name: 'Jan',
        total: Math.floor(Math.random() * 2000) + 500,
        predicted: Math.floor(Math.random() * 2000) + 500,
    },
    {
        name: 'Feb',
        total: Math.floor(Math.random() * 2000) + 500,
        predicted: Math.floor(Math.random() * 2000) + 500,
    },
    {
        name: 'Mar',
        total: Math.floor(Math.random() * 2000) + 500,
        predicted: Math.floor(Math.random() * 2000) + 500,
    },
    {
        name: 'Apr',
        total: Math.floor(Math.random() * 2000) + 500,
        predicted: Math.floor(Math.random() * 2000) + 500,
    },
    {
        name: 'May',
        total: Math.floor(Math.random() * 2000) + 500,
        predicted: Math.floor(Math.random() * 2000) + 500,
    },
    {
        name: 'Jun',
        total: Math.floor(Math.random() * 2000) + 500,
        predicted: Math.floor(Math.random() * 2000) + 500,
    },
    {
        name: 'Jul',
        total: Math.floor(Math.random() * 2000) + 500,
        predicted: Math.floor(Math.random() * 2000) + 500,
    },
]

const v0Value = ref(null)
// const v1Value = ref(null)
// const v2Value = ref(null)
// const v3Value = ref(null)
const blynkAuthToken = 'cTUCK7c6U28-GTHrVd-0MPHHFqNkqz8x' // Your Blynk Auth Token
// const blynkDeviceID = 'YourDeviceID'; // Replace with your Blynk device ID

const fetchDataBlynk = async () => {
    try {
        const response = await axios.get(`https://blynk.cloud/external/api/getAll?token=${blynkAuthToken}`)
        const dataBlynk = response.data
        console.log('Data from Blynk:', dataBlynk)

        v0Value.value = dataBlynk.V0
        // console.log('V0 Value:', v0Value.value)
        console.log(dataBlynk.typeof)
    } catch (error) {
        console.error('Error fetching data from Blynk:', error)
    }
}

const humiditySensorData = ref(null)
const tempSensorData = ref(null)
const fetchDataFire = () => {
    const dataRef = dbRef(database, 'test/random');
    const dataRef2 = dbRef(database, 'test/random2');
    onValue(dataRef, (snapshot) => {
        humiditySensorData.value = snapshot.val();
        console.log('Data from Firebase:', data)
    });
    onValue(dataRef2, (snapshot) => {
        tempSensorData.value = snapshot.val();
        console.log('Data from Firebase2:', tempSensorData)
    });
}

onMounted(() => {
    // fetchDataBlynk()
    fetchDataFire()
})

</script>

<template>
    <div class="container mx-auto">

            <h1>Firebase Data Fetch Example</h1>
            <p>Value from Humidity: {{ humiditySensorData }} %</p>
            <p>Value from Temp Sensor: {{ tempSensorData }} %</p>
            <button @click="fetchDataFire">Fetch V0 Data</button>

    </div>
</template>
