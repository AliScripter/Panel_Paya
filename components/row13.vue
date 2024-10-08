<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>مدیریت سالن</subject>
      <div class="col-span-8 content font-bold h-full content">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2 h-full">
          <div v-for="item in 8" :key="item" class="grid grid-cols-2 gap-1">
            <div
              class="xl:p-3 p-4 basis-1/2 bg-white h-full rounded-md flex justify-center items-center col-span-1 cursor-pointer"
              onclick="pestShow('1')"
            >
              {{ hallManager[0] }}
            </div>

            <div
              class="xl:p-3 p-4 basis-1/2 bg-white h-full rounded-md flex justify-center items-center col-span-1 cursor-pointer"
              onclick="noteShow('1')"
            >
              {{ hallManager[1] }}
            </div>

            <div
              class="xl:p-3 p-4 basis-1/2 bg-white h-full rounded-md flex justify-center items-center col-span-1 cursor-pointer"
              onclick="showCustomChart('1')"
            >
              {{ hallManager[2] }}
            </div>

            <div
              class="xl:p-3 p-4 basis-1/2 bg-white h-full rounded-md flex justify-center items-center col-span-1 cursor-pointer"
              onclick="showPhotoBox('1')"
            >
              {{ hallManager[3] }}
            </div>

            <div
              class="xl:p-3 p-4 basis-1/2 bg-white h-full rounded-md flex justify-center items-center col-span-1 cursor-pointer"
              onclick="showStatic('1')"
            >
              {{ hallManager[4] }}
            </div>

            <div
              class="xl:p-3 p-4 basis-1/2 bg-white h-full rounded-md flex justify-center items-center col-span-1 cursor-pointer"
              onclick="informationShow('1')"
            >
              {{ hallManager[5] }}
            </div>

            <div
              class="xl:p-3 p-4 basis-1/2 bg-white h-full rounded-md flex justify-center items-center col-span-2 cursor-pointer"
              onclick="showSetting('1')"
            >
              {{ hallManager[6] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { hallManager } from '@/db/fake';
</script>
