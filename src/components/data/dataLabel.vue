<script setup lang="ts">
import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    // CardHeader,
    // CardTitle,
} from '@/components/ui/card'

const props = defineProps<{
    Data: number
    Label: string
    type: string
    desc: string
    lowest: number
}>()
</script>

<template>

    <Card :class="[Data > lowest ? 'border-zinc-200' : 'border-rose-600 border-2', 'rounded-xl shadow-sm   bg-white']">
        <CardContent class="p-6">
            <div class="flex justify-between items-center">
                <div>
                    <p class="text-xl font-semibold text-zinc-900">{{Label}}</p>
                    <p class="text-base font-medium text-zinc-500">{{ desc }}</p>
                </div>
                <div v-if="props.type === 'percent'">
                    <div class="flex space-x-4 items-center">
                        <div v-if="Data < lowest" class="fill-rose-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022zM12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"/></svg>
                        </div>
                        <p :class="[Data > lowest ? 'text-zinc-800' : 'text-rose-600', 'text-[40px] font-semibold']">
                            {{ Data }} %
                        </p>
                    </div>
                </div>
                <div v-if="props.type === 'celcius'">
                    <div class="flex items-center gap-x-4">
                        <div v-if="Data < lowest" class="fill-rose-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5.312 10.762C8.23 5.587 9.689 3 12 3s3.77 2.587 6.688 7.762l.364.644c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022zM12 7.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"/></svg>
                        </div>
                        <p :class="[Data > lowest ? 'text-zinc-800' : 'text-rose-600', 'text-[40px] font-semibold']">
                            {{ Data }} C
                        </p>
                    </div>
                </div>
            </div>
        </CardContent>
    </Card>
</template>
