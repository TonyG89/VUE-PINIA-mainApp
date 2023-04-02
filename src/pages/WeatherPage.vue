<template>
  <section class="mx-auto w-500px text-red-300 bg-slate-800 hover:bg-slate-600">
    <h2>Weather</h2>
    <h3>{{ weather }}</h3>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useWeatherStore } from "../stores/weatherStore";

const weather = useWeatherStore();
</script>
