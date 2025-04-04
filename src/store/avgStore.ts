// src/store/avgStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { database } from '@/firebaseConfig' // Adjust the path as necessary
import { ref as dbRef, onValue } from 'firebase/database' 

export const useAvgStore = defineStore('avg', () => {
    const esp1humAVG = ref<number | undefined>(undefined)
    const esp1tempAVG = ref<number | undefined>(undefined)
    const esp2humAVG = ref<number | undefined>(undefined)
    const esp2tempAVG = ref<number | undefined>(undefined)
    const allhumAVG = ref<number | undefined>(undefined)
    const alltempAVG = ref<number | undefined>(undefined)

    const fetchAvgData = () => {
        const esp1humRef = dbRef(database, 'esp1/avg_hum')
        const esp1tempRef = dbRef(database, 'esp1/avg_temp')
        const esp2humRef = dbRef(database, 'esp2/avg_hum')
        const esp2tempRef = dbRef(database, 'esp2/avg_temp')
        const allhumRef = dbRef(database, 'overall/avg_hum')
        const alltempRef = dbRef(database, 'overall/avg_temp')

        onValue(esp1humRef, (snapshot) => {
            esp1humAVG.value = snapshot.val()
        })
        onValue(esp1tempRef, (snapshot) => {
            esp1tempAVG.value = snapshot.val()
        })
        onValue(esp2humRef, (snapshot) => {
            esp2humAVG.value = snapshot.val()
        })
        onValue(esp2tempRef, (snapshot) => {
            esp2tempAVG.value = snapshot.val()
        })
        onValue(allhumRef, (snapshot) => {
            allhumAVG.value = snapshot.val()
        })
        onValue(alltempRef, (snapshot) => {
            alltempAVG.value = snapshot.val()
        })
    }

    return {
        esp1humAVG,
        esp1tempAVG,
        esp2humAVG,
        esp2tempAVG,
        allhumAVG,
        alltempAVG,
        fetchAvgData,
    }
})
