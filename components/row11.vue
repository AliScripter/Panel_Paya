<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>آخرین ارتباط</subject>
      <div class="col-span-8 content font-bold h-full content">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2 h-full">
          <div
            v-for="item in 8"
            :key="item"
            class="col-span-1 bg-[#f0f1f4] flex gap-2 justify-between cursor-pointer"
          >
            <div
              class="xl:p-0 p-4 w-[48%] bg-white h-full rounded-md flex justify-center items-center"
            >
              {{ lastConection[0] }}
            </div>
            <div
              class="xl:p-0 p-4 w-[48%] bg-white h-full rounded-md flex justify-center items-center font-bolder text-md"
            >
              {{ lastConection[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { lastConection } from '@/db/fake';
</script>
