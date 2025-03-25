<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)
const lineChartCanvas = ref(null)
let chartInstance: Chart | null = null

const props = defineProps({
    humidity: Number,
    temperature: Number,
})

const lineChartData = {
    labels: [] as number[],
    datasets: [
        {
            label: 'Humidity',
            data: [] as number[],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
        },
        {
            label: 'Temperature',
            data: [] as number[],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
            tension: 0.1,
        },
    ],
}

const updateChartData = (label: string, value: number) => {
    const dataset = lineChartData.datasets.find((d) => d.label === label)
    if (dataset) {
        dataset.data.push(value)
        if (lineChartData.labels.length === dataset.data.length - 1) {
            lineChartData.labels.push(lineChartData.labels.length + 1)
        }
        if (dataset.data.length > 10) {
            dataset.data.shift()
            lineChartData.labels.shift()
        }
        if (chartInstance) {
            chartInstance.update()
        }
    }
}

watch(
    () => props.humidity,
    (newHumidity) => {
        if (newHumidity !== null) {
            updateChartData('Humidity', newHumidity as number)
        }
    },
)

watch(
    () => props.temperature,
    (newTemperature) => {
        if (newTemperature !== null) {
            updateChartData('Temperature', newTemperature as number)
        }
    },
)

onMounted(() => {
    if (lineChartCanvas.value) {
        chartInstance = new Chart(lineChartCanvas.value, {
            type: 'line',
            data: lineChartData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        })
    }
})
</script>

<template>
    <div>
        <canvas ref="lineChartCanvas"></canvas>
    </div>
</template>
