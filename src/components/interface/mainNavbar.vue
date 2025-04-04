<script setup lang="ts">
import { RouterLink } from 'vue-router';
// import { Input } from '@/components/ui/input'
</script>

<template>
    <div class="navbar border-b border-zinc-200 px-24">
        <div class="navbar-start flex flex-row items-center py-2">
            <p class="font-semibold text-lg text-zinc-900">Garden Monitoring</p>
            <div class="bg-zinc-300 h-5 w-[2px] rounded mx-4"></div>
            <div class="flex flex-row justify-center gap-5">
                <RouterLink to="/" v-slot="{ isActive }">
                    <span :class="['router-link', { 'text-zinc-800 font-medium': isActive }]">Dashboard</span>
                </RouterLink>
                <RouterLink to="/sector" v-slot="{ isActive }">
                    <span :class="['router-link', { 'text-zinc-800 font-medium': isActive }]">Sector</span>
                </RouterLink>
                <RouterLink to="/pots" v-slot="{ isActive }">
                    <span :class="['router-link', { 'text-zinc-800 font-medium': isActive }]">Pots</span>
                </RouterLink>
                <RouterLink to="/information" v-slot="{ isActive }">
                    <span :class="['router-link', { 'text-zinc-800 font-bold': isActive }]">Information</span>
                </RouterLink>
            </div>
        </div>
        <div class="navbar-center hidden lg:flex">
            
        </div>
        <div class="navbar-end">
            <input type="text" placeholder="Search" class=" w-full max-w-xs px-4 py-2 border border-zinc-200 rounded-[6px] focus:outline-none" />
        </div>
    </div>
</template>
