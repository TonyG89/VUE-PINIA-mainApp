<template>
  <div class="w-[350px] bg-slate-600 rounded-xl m-2">
    <h3 class="text-xl text-green-500">{{ monthName[currentDate.month] }}</h3>
    <ul class="flex flex-nowrap">
      <li
        v-for="day in weekDay"
        :key="day"
        class="p-2 flex-1 w-[50px] rounded text-2xl text-amber-400"
      >
        {{ day }}
      </li>
    </ul>
    <ul class="flex flex-wrap">
      <li
        v-for="i in daysArr"
        :key="i"
        class="p-2 w-[50px] rounded hover:bg-amber-300 hover:text-amber-900"
        :class="i === currentDate.day && 'bg-amber-200 text-amber-600'"
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import getDatesOfMonth from '../helpers/getDatesOfMonth';

const days = getDatesOfMonth(month, year);
const weekDayNumber = new Date(year, month, 0).getUTCDay();
const daysArr = [];
daysArr.length = weekDayNumber;
for (let i = 1; i <= days; i++) daysArr.push(i);
console.log(daysArr);
const weekDay = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const monthName = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

const {
  currentDate: { day, month, year },
  adjacent,
} = defineProps({ currentDate: {}, adjacent: 0 });

console.log(new Date(year, month, 0).getUTCDay());
</script>

<style lang="scss" scoped></style>
