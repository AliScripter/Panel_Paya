<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>جزئیات</subject>
      <div class="col-span-8 content font-bold">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
          <div
            v-for="item in hallsName"
            :key="item"
            class="col-span-1 bg-white py-2 px-2 rounded-[10px] flex justify-between shadow-md cursor-pointer"
          >
            <div class="relative inline-block group">
              <i class="fa-solid fa-circle-info text-teal-500 text-md"></i>
              <div
                class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-3 px-3 top-full left-1/2 transform -translate-x-1/2 w-[250px] z-10"
              >
                <table class="w-full">
                  <tr class="mb-50">
                    <td class="w-1/2">تاریخ شروع:</td>
                    <td class="w-1/2">1403/05/05</td>
                  </tr>

                  <tr>
                    <td class="w-1/2">تاریخ اتمام :</td>
                    <td class="w-1/2">1403/06/05</td>
                  </tr>
                </table>
              </div>
            </div>
            <p>{{ item }}</p>
            <div class="relative inline-block group">
              <i class="bi bi-arrow-counterclockwise text-green-900"></i>
              <div
                class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-1"
              >
                refresh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { hallsName } from '@/db/fake';
</script>
