<template>
  <h1>CALENDAR:</h1>
  <p>{{ getCurrentDate }}</p>
  <CalendarMonth :currentDate="today" :otherMonth="-1" />
  <CalendarMonth :currentDate="today" />
  <CalendarMonth :currentDate="today" :otherMonth="next" />
</template>

<script setup>
import { ref, computed } from 'vue';
import CalendarMonth from './CalendarMonth.vue';

const last = -1;
const next = 1;

const currentDate = ref(new Date());

const today = computed(() => ({
  month: currentDate.value.getMonth(),
  year: currentDate.value.getFullYear(),
  day: currentDate.value.getDate(),
}));

console.log(today.value);
console.log(today.year);
</script>
