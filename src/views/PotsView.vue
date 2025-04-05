<script setup lang="ts">
import MainNavbar from '@/components/interface/mainNavbar.vue';
import pagesHeader from '@/components/interface/pagesHeader.vue';
import { usePotStore } from '@/store/potStore'
import detailSinglePot from '@/components/data/detailSinglePot.vue';

const pot = usePotStore()
pot.fetchPotData()


</script>

<template>
    <mainNavbar />
    <div class="px-24">
        <div class="my-4">
            <pagesHeader pages="Pots View" description="Overview of Detailed Pots Data" />
            <div class="grid grid-cols-3 gap-4 mt-4">
                <detailSinglePot 
                :DataHum="pot.pots.pot1?.hum" 
                :DataTemp="pot.pots.pot1?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 1"
                sector="Sector 1"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot2?.hum" 
                :DataTemp="pot.pots.pot2?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 2"
                sector="Sector 1"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot3?.hum" 
                :DataTemp="pot.pots.pot3?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 3"
                sector="Sector 1"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot4?.hum" 
                :DataTemp="pot.pots.pot4?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 4"
                sector="Sector 1"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot5?.hum" 
                :DataTemp="pot.pots.pot5?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 5"
                sector="Sector 1"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot6?.hum" 
                :DataTemp="pot.pots.pot6?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 6"
                sector="Sector 2"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot7?.hum" 
                :DataTemp="pot.pots.pot7?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 7"
                sector="Sector 2"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot8?.hum" 
                :DataTemp="pot.pots.pot8?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 8"
                sector="Sector 2"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot9?.hum" 
                :DataTemp="pot.pots.pot9?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 9"
                sector="Sector 2"
                />
                <detailSinglePot 
                :DataHum="pot.pots.pot10?.hum" 
                :DataTemp="pot.pots.pot10?.temp"
                label1="Humidity"
                label2="Temperature"
                ttile="Pot 10"
                sector="Sector 2"
                />
            </div>
        </div>
    </div>
</template>