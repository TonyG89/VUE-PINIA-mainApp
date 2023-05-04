<template>
  <h1 className="text-3xl font-bold underline">My App!</h1>
  <button @click="isPopupOpen = true">Open window</button>
  <Popup
    :isOpen="isPopupOpen"
    @close="isPopupOpen = false"
    @ok="popupConfirmed"
  >
    are toy ready?
    <template #actions>
      Напишите
      <input
        type="text"
        :placeholder="CONFIRMATION_TEXT"
        :model="inputConfirm"
      />
      <button :disabled="!isInputConfirmCorrect" @click="alert('sss')">ok</button>
    </template>
  </Popup>
</template>

<script setup>
import { reactive, computed, ref } from 'vue';
import Popup from './components/Popup.vue';

const isPopupOpen = ref(false);

const inputConfirm = ref('');

const CONFIRMATION_TEXT = 'confirm';

const isInputConfirmCorrect = computed(() => inputConfirm.value === CONFIRMATION_TEXT);

const popupConfirmed = () => {
  alert('You are ready!');
  isPopupOpen.value = false;
};
</script>
