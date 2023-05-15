<template>
  <v-app id="inspire">
    <Header/>
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";


</script>
