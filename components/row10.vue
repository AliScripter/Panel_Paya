<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>چارت</subject>
      <div class="col-span-8 content font-bold h-full content">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2 h-full">
          <div
            v-for="item in 8"
            :key="item"
            class="col-span-1 bg-[#f0f1f4] flex gap-2 justify-between cursor-pointer"
          >
            <div
              class="xl:p-0 p-4 w-[48%] bg-white h-full rounded-md flex justify-center items-center relative group"
              onclick="LineChart('1')"
            >
              {{ chart[0] }}
              <div
                class="absolute hidden group-hover:block leading-5 bg-white border-2 border-solid border-[#5145e5] text-white text-xs rounded py-5 px-5 text-justify bottom-full transform right-1/2 mb-1 w-[1200px]"
              >
                <div id="LineChart1-1" class="LineChartColor w-full"></div>
              </div>
            </div>
            <div
              class="xl:p-0 p-4 w-[48%] bg-white h-full rounded-md flex justify-center items-center relative group"
              onclick="VolcanoChart('1')"
            >
              {{ chart[1] }}
              <div
                class="absolute hidden group-hover:block leading-5 bg-white border-2 border-solid border-[#5145e5] text-white text-xs rounded py-5 px-5 text-justify bottom-full right-1/2 transform mb-1 w-[800px]"
              >
                <div id="Volcanochart1-1" class="w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { chart } from '@/db/fake';
</script>
