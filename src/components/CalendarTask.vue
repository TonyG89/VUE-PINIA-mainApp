<template>
  <h1>CALENDAR:</h1>
  <CalendarMonth :currentDate="today" :adjacent="0" />
</template>

<script setup>
import CalendarMonth from './CalendarMonth.vue';

const currentDate = new Date();
const today = {
  month: currentDate.getMonth(),
  year: currentDate.getFullYear(),
  day: currentDate.getDate(),
};
</script>
