import { defineStore } from 'pinia'
import { ref } from 'vue'
import { database } from '@/firebaseConfig' // Adjust the path as necessary
import { ref as dbRef, onValue } from 'firebase/database' 

interface PotData {
    hum: number
    temp: number
}

export const usePotStore = defineStore('pot', () => {
    const pots = ref<Record<string, PotData>>({})

    const fetchPotData = () => {
        for (let i = 1; i <= 5; i++) {
            const potRef = dbRef(database, `esp1/pot${i}`)
            onValue(potRef, (snapshot) => {
                pots.value[`pot${i}`] = snapshot.val()
            })
        }
        for (let i = 6; i <= 10; i++) { 
            const potRef = dbRef(database, `esp2/pot${i}`)
            onValue(potRef, (snapshot) => {
                pots.value[`pot${i}`] = snapshot.val()
            })
        }
    }

    return {
        pots,
        fetchPotData,
    }
})
