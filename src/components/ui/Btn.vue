<template>
  <button
    depressed
    :value="thisButton.title"
    :class="thisButton.style"
    :name="thisButton.name"
    @click="onAdd"
  >
    {{ thisButton.title }}
  </button>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const buttonsStyle = [
  {
    name: "add",
    style: "border-0 bg-green-400 hover:bg-green-700 m-2",
    title: "Добавить",
    actions: onAdd,
  },
  {
    name: "edit",
    style: "border-0 bg-amber-400 hover:bg-amber-700 m-2",
    title: "Редактировать",
  },
  {
    name: "clean",
    style: "m-2",
    title: "Очистить",
  },
  {
    name: "remove",
    style: "m-2",
    title: "Удалить",
  },
];

const thisButton = ref({});

thisButton.value = buttonsStyle.find((item) => item.name === props.nameBtn);
// thisButton.value =

const props = defineProps({
  nameBtn: {
    type: String,
    default: "",
  },
  inputValue: {
    type: String,
    default: "",
  },
});

const emits = defineEmits({
  onAdd: null,
});

const onAdd = () => {
  emits("onAdd", () => {
    if (props.inputValue === "") return;
    todoList.value.push(props.inputValue);
    localStorage.setItem("todoList", JSON.stringify(todoList.value));
    props.inputValue = "";
  });
};
</script>
