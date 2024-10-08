<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>مرحله سالن</subject>
      <div class="col-span-8 content font-bold">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
          <div
            v-for="item in hallLevel"
            :key="item"
            class="col-span-1 bg-white py-2 px-2 rounded-[10px] flex justify-between shadow-md cursor-pointer"
          >
            <span class="mr-1">{{ item[0] }}</span>
            <span class="font-bold ml-1">{{ item[1] }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { hallLevel } from '@/db/fake';
</script>
