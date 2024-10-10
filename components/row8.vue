<template>
    <div class="mt-2">
        <div class="grid grid-cols-9 gap-1">
            <subject>فن</subject>
            <div class="col-span-8 font-bold">
                <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2 content">
                    <div
                        v-for="item in 8"
                        :key="item"
                        class="col-span-1 bg-[#f0f1f4] rounded-[10px] flex justify-between cursor-pointer"
                    >
                        <div
                            class="bg-white w-[35%] rounded-md text-center content-center py-2"
                        >
                            Empty
                        </div>
                        <div
                            class="bg-white w-[35%] rounded-md text-center content-center text-slate-700"
                        >
                            <input
                                type="number"
                                class="inputhall w-full h-full rounded-md border-none"
                            />
                        </div>
                        <button
                            type="submit"
                            class="text-center content-center check-svg"
                        >
                            <i
                                class="bi bi-send-fill fa-2x text-gray-600"
                                onclick="changeIcon(this)"
                            ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped></style>
