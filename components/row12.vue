<template>
    <div class="mt-2">
        <div class="grid grid-cols-9 gap-1">
            <subject>تعداد ارتباط</subject>
            <div class="col-span-8 font-bold h-full">
                <div
                    class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2 h-full content"
                >
                    <div
                        v-for="item in 8"
                        :key="item"
                        class="col-span-1 bg-[#f0f1f4] flex gap-2 justify-between cursor-pointer"
                    >
                        <div
                            class="xl:p-0 p-4 w-[25%] bg-white h-full rounded-md flex justify-center items-center"
                        >
                            <span
                                v-if="countOfConection[0][item] == 'green'"
                                class="relative flex h-5 w-5"
                            >
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-600 opacity-100"
                                ></span>
                                <span
                                    class="relative inline-flex rounded-full h-5 w-5 bg-lime-600"
                                ></span>
                            </span>

                            <span v-else class="relative flex h-5 w-5">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-100"
                                ></span>
                                <span
                                    class="relative inline-flex rounded-full h-5 w-5 bg-red-600"
                                ></span>
                            </span>
                        </div>
                        <div
                            class="xl:p-0 p-4 w-[73%] bg-white h-full rounded-md flex justify-center items-center font-bolder text-md"
                        >
                            {{ countOfConection[1] }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { countOfConection } from '@/db/fake';
</script>
