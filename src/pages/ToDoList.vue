<template>
  <h1 class="text-amber-600">{{ pageData.title }}</h1>
  <div class="w-50 bg-slate-400 p-5 rounded-lg">
    <input
      class="w-full p-2 m-2 rounded"
      :placeholder="pageData.placeholder"
      type="text"
      :value="state.value"
      @input="setInputValue"
      @keypress="enterKey"
    />
    <div class="flex">
      <Button :nameBtn="pageData.btn.add" :inputValue="inputValue" />
      <Button :nameBtn="pageData.btn.clean" />
    </div>
    <hr class="my-6" />
    <h2>
      Список:
      <span class="text-amber-300 font-bold text-lg"
        >({{ state.todoList.length }})</span
      >
    </h2>
    <h3
      v-if="inputValue"
      class="max-w-min mx-auto px-2 py-1 rounded-lg border-dashed border-2 border-gray-500"
    >
      {{ inputValue }} 
    </h3>
    <ul>
      <li v-for="(item, index) in state.todoList" :key="index" @click="putRow">
        <div>{{ state.date }}</div>
        <div>
          {{ item }}
        </div>
      </li>
    </ul>
    <Button :nameBtn="pageData.btn.add" />
    <div v-if="state.todoList.length">
      <Button :nameBtn="pageData.btn.remove" />
    </div>
    <hr class="my-6" />
    <h2>{{ pageData.complited }}</h2>
    <hr class="my-6" />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Button from "../components/ui/Btn.vue";

// TODO: разобраться с эмитами кнопок, вставить таблиц(поиск, фильтр, сортировка), закинуть в локалстореж, подумать как работать с пенией

const pageData = {
  title: "TO DO LIST",
  label: "Новая задача",
  list: "Список",
  complited: "Завершенные",
  placeholder: "Напишите новое задание",
  btn: {
    add: "add",
    edit: "edit",
    clean: "clean",
    remove: "remove",
  },
};

const state = computed(() => ({
  value: inputValue.value,
  todoList: todoList.value,
  todo: todo.value,
  date: new Date().getDate()
}));

const todoList = ref([]);
const todo = ref({});

// const componentsState =

const inputValue = ref("");

const setInputValue = (e) => {
  inputValue.value = e.target.value;
};

function enterKey(e) {
  if (e.key === "Enter") {
    add();
  }
}

const deleteRow = () => console.log("deleteRow");
const editRow = () => console.log("editRow");
const putRow = () => console.log("putRow");

const add = () => {
  if (inputValue.value === "") return;
  todoList.value.push(inputValue.value);
  localStorage.setItem("todoList", JSON.stringify(todoList.value));
  inputValue.value = "";
};
</script>

<style lang="scss" scoped></style>
