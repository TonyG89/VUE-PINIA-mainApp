<template>
  <div class="w-[350px] bg-slate-600 rounded-xl m-2">
    <h3 class="text-xl text-green-500">
      {{ monthName[currentDate.month + props.otherMonth] }}
    </h3>
    <ul class="flex flex-nowrap">
      <li
        v-for="d in weekDay"
        :key="d"
        class="p-2 flex-1 w-[50px] rounded text-2xl text-amber-400"
      >
        {{ d }}
      </li>
    </ul>
    <ul class="flex flex-wrap">
      <li
        v-for="i in daysArr"
        :key="i"
        @click="dayClick"
        class="p-2 border w-[50px] rounded hover:bg-amber-300 hover:text-amber-900"
        :class="
          i === currentDate.day &&
          !props.otherMonth &&
          'bg-amber-200 text-amber-600'
        "
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import getDatesOfMonth from '../helpers/getDaysOfMonth';

const days = getDatesOfMonth(props.currentDate.month, props.currentDate.year);
const weekDayNumber = new Date(
  props.currentDate.year,
  props.currentDate.month,
  props.otherMonth
).getUTCDay();
const daysArr = [];
daysArr.length = weekDayNumber;

for (let i = 1; i <= days; i++) daysArr.push(i);
console.log(daysArr);

const dayClick = (e)=>console.log(e)

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

const props = defineProps({
  currentDate: {
    type: Object,
    default: {},
  },
  otherMonth: {
    type: Number,
    default: null,
  },
});
</script>

<style lang="scss" scoped></style>
