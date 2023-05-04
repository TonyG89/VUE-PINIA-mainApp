<template>
  <h1>CALENDAR:</h1>
  <p>{{ today }}</p>
  <button @click="onChangeCalendar">{{ btn }}</button>
  <CalendarMonth v-if="btn === 'Три'" :currentDate="today" :otherMonth="-1" />
  <div class="flex">
    <CalendarMonth :currentDate="today" />
    <CalendarList v-if="isCalendarList"/>
  </div>
  <CalendarMonth v-if="btn === 'Три'" :currentDate="today" :otherMonth="1" />
</template>

<script setup>
import { ref, computed } from 'vue';
import CalendarMonth from './CalendarMonth.vue';
import CalendarList from './CalendarList.vue';

const currentDate = new Date();

const isCalendarList = ref(true)

const today = computed(() => ({
  month: currentDate.getMonth(),
  year: currentDate.getFullYear(),
  day: currentDate.getDate(),
}));

const btn = ref('Один');

const onChangeCalendar = () => {
  if (btn.value !== 'Три') {
    btn.value = 'Три';
  } else btn.value = 'Один';
};

console.log(today.value);
console.log(today.year);
</script>
