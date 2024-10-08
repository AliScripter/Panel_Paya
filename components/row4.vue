<template>
  <div class="mt-2">
    <div class="grid grid-cols-9 gap-1">
      <subject>
        <i class="fa-solid fa-temperature-quarter"></i>
        <p>دمای 2</p>
      </subject>
      <div class="col-span-8 content font-bold">
        <div class="grid lg:grid-cols-8 sm:grid-cols-4 gap-2">
          <!-- start red alert component -->

          <!-- Yello Alarm component -->
          <yellow v-for="item in 8" :key="item" />
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
