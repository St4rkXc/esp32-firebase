import { defineStore } from 'pinia'

export const useChartStore = defineStore('chart', {
    state: () => ({
        chartData: [] as number[][], // Array of datasets
        labels: [] as number[],
        datasetLabels: [] as string[], // E.g. ['Humidity', 'Temperature']
    }),

    actions: {
        initDatasets(num: number) {
            this.chartData = Array.from({ length: num }, () => [])
            this.datasetLabels = Array.from({ length: num }, (_, i) => `Dataset ${i + 1}`)
        },

        updateData(index: number, value: number) {
            if (!this.chartData[index]) return
            this.chartData[index].push(value)

            // Keep labels aligned
            if (index === 0) {
                this.labels.push(this.labels.length + 1)
                if (this.labels.length > 40) {
                    this.labels.shift()
                }
            }

            if (this.chartData[index].length > 40) {
                this.chartData[index].shift()
            }
        },

        setDatasetLabel(index: number, label: string) {
            this.datasetLabels[index] = label
        },

        reset() {
            this.labels = []
            this.chartData = []
            this.datasetLabels = []
        },
    },
})
