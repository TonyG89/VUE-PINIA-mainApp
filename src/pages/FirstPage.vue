<template>
  <h2>Calendar</h2>
  <div class="bg-stone-500">
    <CalendarTask />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useMainStore } from '../stores/mainStore';
import CalendarTask from '../components/CalendarTask.vue';

const mainStore = useMainStore();

mainStore.getBreweriesOnPage(3);

const componentState = computed(() => ({
  allBreweries: [{ name: mainStore.allBreweries }],
}));

console.log(mainStore.allBreweries);
console.log(mainStore.breweriesOnPage);
console.log(mainStore);
</script>
