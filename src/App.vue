<template>
  <h1 className="text-3xl font-bold underline">My App!</h1>
  <!-- <ToDoList /> -->
  <div class="w-screen">
    <!-- <LogbookTable /> -->
    <FirstPage/>
  </div>
</template>

<script setup>
import FirstPage from "./pages/FirstPage.vue";
import LogbookTable from './components/LogbookTable.vue';
import ToDoList from './pages/ToDoList.vue';
</script>
