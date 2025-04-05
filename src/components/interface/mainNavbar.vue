<script setup lang="ts">
import { RouterLink } from 'vue-router'
// import { Input } from '@/components/ui/input'
</script>

<template>
    <div class="navbar border-b border-zinc-200 px-4 md:px-12 xl:px-24">
        <div class="navbar-start flex flex-row items-center py-2">
            <p class="font-semibold text-lg text-zinc-900">Garden Monitoring</p>
            <div class="bg-zinc-300 h-5 w-[2px] rounded mx-4 hidden lg:block"></div>
            <div class="lg:flex flex-row justify-center gap-5 hidden">
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
        <div class="navbar-center hidden lg:flex"></div>
        <div class="navbar-end">
            <input type="text" placeholder="Search" class="w-full max-w-xs px-4 py-2 border border-zinc-200 rounded-[6px] focus:outline-none hidden lg:block" />
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <div tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-6 shadow space-y-4">
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
        </div>
    </div>
</template>
