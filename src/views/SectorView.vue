<script setup lang="ts">
import MainNavbar from '@/components/interface/mainNavbar.vue'
import PagesHeader from '@/components/interface/pagesHeader.vue'
import { useAvgStore } from '@/store/avgStore'

const avg = useAvgStore()
avg.fetchAvgData()

console.log(avg.esp1humAVG)
</script>

<template>
    <MainNavbar />
    <div class="px-24 mt-4">
        <PagesHeader pages="Dashboard" description="Overview of all data" />
        <div class="p-4">
            <h3 class="text-lg font-bold">Rata-rata</h3>
            <p>ESP1 Temp: {{ avg.esp1tempAVG }}</p>
            <p>ESP1 Hum: {{ avg.esp1humAVG }}</p>
            <p>ESP2 Temp: {{ avg.esp2tempAVG }}</p>
            <p>ESP2 Hum: {{ avg.esp2humAVG }}</p>
            <p>All Temp: {{ avg.alltempAVG }}</p>
            <p>All Hum: {{ avg.allhumAVG }}</p>
        </div>
    </div>
</template>
