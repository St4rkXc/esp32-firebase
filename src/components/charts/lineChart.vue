<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)
const lineChartCanvas = ref(null)
let chartInstance: Chart | null = null

const props = defineProps({
    firstData: Number,
    secondData: Number,
    label1: {
        type: String,
    },
    label2: {
        type: String,
    }
})

const lineChartData = {
    labels: [] as number[],
    datasets: [
        {
            label: props.label1,
            data: [] as number[],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
        },
        {
            label: props.label2,
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
        if (dataset.data.length > 20) {
            dataset.data.shift()
            lineChartData.labels.shift()
        }
        if (chartInstance) {
            chartInstance.update()
        }
    }
}

watch(
    () => props.firstData,
    (newHumidity) => {
        if (newHumidity !== null) {
            updateChartData(props.label1 as string, newHumidity as number)
        }
    },
)

watch(
    () => props.secondData,
    (newTemperature) => {
        if (newTemperature !== null) {
            updateChartData(props.label2 as string, newTemperature as number)
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
                        grid: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.04)',
                        },
                    },
                    x: {
                        ticks: {
                            display: false,
                        },
                        grid: {
                            display: false,
                        },
                    }
                },
            },
        })
    }
})
</script>

<template>
    <div class="w-full h-full">
        <canvas ref="lineChartCanvas" class="canvas"></canvas>
    </div>
</template>
