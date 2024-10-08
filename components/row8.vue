<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>فن</subject>
      <div class="col-span-8 content font-bold">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
          <div
            class="col-span-1 bg-[#f0f1f4] rounded-[10px] flex justify-between cursor-pointer"
            v-for="item in 8"
            :key="item"
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
            <button type="submit" class="text-center content-center check-svg">
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
