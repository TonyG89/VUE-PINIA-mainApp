<template>
  <h2>Breweries</h2>
  <!-- <div>{{ allBreweries }}</div> -->
  <!-- <h1 v-for="brewery in mainStore.breweriesOnPage.name" :key="mainStore.breweriesOnPage.id" :text="brewery">{{ brewery }}</h1> -->
  <div
    class="bg-blue-500 hover:bg-blue-700"
    v-for="brew in mainStore.breweriesOnPage"
    :key="brew.id"
  >
    {{ brew.name }}
  </div>
  <div class="bg-stone-500">{{ breweries }}</div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useMainStore } from "../stores/mainStore";

const mainStore = useMainStore();

mainStore.getBreweriesOnPage(3);

const breweries = ref([]);
breweries = mainStore.getAllBreweries();

const componentState = computed(() => ({
  allBreweries: [{ name: mainStore.allBreweries }],
}));

console.log(mainStore.allBreweries);
console.log(mainStore.breweriesOnPage);
console.log(mainStore);
</script>
