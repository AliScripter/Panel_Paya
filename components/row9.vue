<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>کنترلر</subject>
      <div class="col-span-8 content font-bold">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
          <div
            v-for="item in 8"
            :key="item"
            class="col-span-1 bg-white py-2 px-4 rounded-[10px] flex flex-col gap-2 justify-between shadow-md cursor-pointer"
          >
            <div class="flex justify-between">
              <span>
                {{ controller[0] }}
              </span>
              <label class="inline-flex cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative w-8 h-4.5 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-[#65a30d]"
                ></div>
              </label>
            </div>

            <div class="flex justify-between">
              <span>
                {{ controller[1] }}
              </span>
              <label class="inline-flex cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer"
                  checked=""
                />
                <div
                  class="relative w-8 h-4.5 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-[#65a30d]"
                ></div>
              </label>
            </div>

            <div class="flex justify-between">
              <span>
                {{ controller[2] }}
              </span>
              <label class="inline-flex cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  class="sr-only peer"
                  checked=""
                />
                <div
                  class="relative w-8 h-4.5 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-[#65a30d]"
                ></div>
              </label>
            </div>

            <div class="flex justify-between">
              <span>
                {{ controller[3] }}
              </span>
              <label class="inline-flex cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div
                  class="relative w-8 h-4.5 bg-gray-200 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-[#65a30d]"
                ></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { controller } from '@/db/fake';
</script>
