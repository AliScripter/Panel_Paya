<template>
  <div
    class="items-stretch w-full col-span-1 bg-white py-2 px-2 rounded-[10px] flex justify-between shadow-md cursor-pointer"
  >
    <div class="flex space-x-2">
      <div class="flex flex-col">
        <div class="relative inline-block group" @click="showstate(this)">
          <i class="fa-solid fa-circle-info text-teal-500 text-md"></i>
          <div
            class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-3 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-[250px] z-10"
          >
            <table class="w-full">
              <tbody>
                <tr
                  v-for="(info, index) in temperature1.circleInfo"
                  :key="index"
                  class="h-5"
                >
                  <td class="w-1/2">{{ info[0] }}</td>
                  <td class="w-1/2">{{ info[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="relative inline-block group" @click="showstate(this)">
          <i class="fa-solid fa-bolt text-yellow-400 text-md"></i>
          <div
            class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-3 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-[250px] z-10"
          >
            <table class="w-full">
              <tbody>
                <tr
                  v-for="(bolt, index) in temperature1.circleBolt"
                  :key="index"
                  class="h-5"
                >
                  <td class="w-1/2">{{ bolt[0] }}</td>
                  <td class="w-1/2">{{ bolt[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="relative inline-block group" @click="showstate(this)">
          <i class="fa-solid fa-triangle-exclamation text-red-500 text-md"></i>
          <div
            class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-3 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-[250px] z-10"
          >
            <table class="w-full">
              <tbody>
                <tr
                  v-for="(danger, index) in temperature1.danger"
                  :key="index"
                  class="h-5"
                >
                  <td class="w-1/2">{{ danger[0] }}</td>
                  <td class="w-1/2">{{ danger[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-around">
      <p class="font-semibold">آنلاین</p>
      <p>میانگین</p>
    </div>

    <div class="flex flex-col justify-around text-end">
      <p class="text-xl text-[#5FBA51] counter">
        {{ temperature1.info.online }}
      </p>
      <p
        class="text-sm counter"
        :class="{ 'text-[#EFAB28]': temperature1.info.midd <= 30 }"
        :style="getStyle(temperature1.info.midd)"
      >
        {{ temperature1.info.midd }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { temperature1 } from '@/db/fake';

const getStyle = temp => {
  if (temp < 30) {
    return {
      color: 'red',
      animation: '500ms ease 0s infinite normal none running anim',
    };
  } else {
    return {
      color: '#EFAB28',
    };
  }
};

const showstate = element => {
  // Implement your showstate function here
  console.log('showstate called', element);
};
</script>

<style scoped>
@keyframes anim {
  /* Define your animation here */
}
</style>
