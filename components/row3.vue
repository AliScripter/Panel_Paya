<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>
        <i class="fa-solid fa-temperature-quarter"></i>
        <p>دمای 1</p>
      </subject>
      <div class="col-span-8 content font-bold">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
          
          <!-- start red alert component -->
          <div
            v-for="item in 1"
            :key="item"
            class="col-span-1 bg-white py-2 px-2 rounded-[10px] flex justify-between shadow-md cursor-pointer"
          >
            <div class="flex flex-col">
              <div
                class="relative inline-block group"
                onclick="showstate(this)"
              >
                <i class="fa-solid fa-circle-info text-teal-500 text-md"></i>
                <div
                  class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-3 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-[250px]"
                >
                  <table class="w-full">
                    <tbody>
                      <tr class="h-5">
                        <td>{{ temperature1.circleInfo[0][0] }}</td>
                        <td>{{ temperature1.circleInfo[0][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.circleInfo[1][0] }}</td>
                        <td>{{ temperature1.circleInfo[1][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.circleInfo[2][0] }}</td>
                        <td>{{ temperature1.circleInfo[2][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.circleInfo[3][0] }}</td>
                        <td>{{ temperature1.circleInfo[3][1] }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                class="relative inline-block group"
                onclick="showstate(this)"
              >
                <i class="fa-solid fa-bolt text-yellow-400 text-md"></i>
                <div
                  class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-3 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-[250px]"
                >
                  <table class="w-full">
                    <tbody>
                      <tr class="h-5">
                        <td>{{ temperature1.circleBolt[0][0] }}</td>
                        <td>{{ temperature1.circleBolt[0][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.circleBolt[1][0] }}</td>
                        <td>{{ temperature1.circleBolt[1][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.circleBolt[2][0] }}</td>
                        <td>{{ temperature1.circleBolt[2][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.circleBolt[3][0] }}</td>
                        <td>{{ temperature1.circleBolt[3][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.circleBolt[4][0] }}</td>
                        <td>{{ temperature1.circleBolt[4][1] }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div
                class="relative inline-block group"
                onclick="showstate(this)"
              >
                <i
                  class="fa-solid fa-triangle-exclamation text-red-500 text-md"
                ></i>

                <div
                  class="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-3 px-3 bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-[250px]"
                >
                  <table class="w-full">
                    <tbody>
                      <tr class="h-5">
                        <td>{{ temperature1.danger[0][0] }}</td>
                        <td>{{ temperature1.danger[0][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.danger[1][0] }}</td>
                        <td>{{ temperature1.danger[1][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.danger[2][0] }}</td>
                        <td>{{ temperature1.danger[2][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.danger[3][0] }}</td>
                        <td>{{ temperature1.danger[3][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.danger[4][0] }}</td>
                        <td>{{ temperature1.danger[4][1] }}</td>
                      </tr>

                      <tr class="h-5">
                        <td>{{ temperature1.danger[5][0] }}</td>
                        <td>{{ temperature1.danger[5][1] }}</td>
                      </tr>
                    </tbody>
                  </table>
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

          <!-- Yello Alarm component -->
          <yellow v-for="item in 7" :key="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { temperature1 } from '@/db/fake';

const getStyle = temp => {
  if (temp > 30) {
    return {
      color: 'red',
      animation: '1000ms ease 0s infinite normal none running anim',
    };
  } else {
    return {
      color: '#EFAB28',
    };
  }
};
</script>
<style scoped></style>
