<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>co2</subject>
      <div class="col-span-8 content font-bold">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
          <div
            v-for="item in 8"
            :key="item"
            class="col-span-1 bg-white py-0 px-4 rounded-[10px] flex justify-between shadow-md cursor-pointer"
          >
            <div class="relative inline-block group">
              <i class="fa-solid fa-bolt text-yellow-500 text-md pt-4"></i>
              <div
                class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1"
              >
                هشدار
              </div>
            </div>

            <div class="flex flex-col justify-around text-center">
              <p class="font-bold text-blue-500 text-xl">0</p>
              <p class="font-bold text-xl">1000</p>
            </div>

            <div class="relative inline-block group">
              <i
                class="fa-solid fa-triangle-exclamation text-red-500 text-md pt-4"
              ></i>

              <div
                class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1"
              >
                خطر
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
