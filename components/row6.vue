<template>
    <div class="mt-2">
        <div class="grid grid-cols-9 gap-1">
            <subject>
                <i class="bi bi-droplet"></i><br />
                رطوبت
            </subject>
            <div class="col-span-8 content font-bold">
                <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
                    <div
                        v-for="item in 8"
                        :key="item"
                        class="col-span-1 bg-white py-2 px-2 rounded-[10px] flex justify-between shadow-md cursor-pointer"
                    >
                        <div class="relative inline-block group">
                            <i
                                class="fa-solid fa-bolt text-yellow-500 text-md"
                            ></i>

                            <div
                                class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1"
                            >
                                {{ humidity[0] }}
                            </div>
                        </div>

                        <div class="flex flex-col justify-around">
                            <p class="font-semibold text-blue-500 text-3xl">
                                {{ humidity[2][item] }} %
                            </p>
                        </div>

                        <div class="relative inline-block group">
                            <i
                                class="fa-solid fa-triangle-exclamation text-red-500 text-md"
                            ></i>

                            <div
                                class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1"
                            >
                                {{ humidity[1] }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { humidity } from '@/db/fake';
</script>
