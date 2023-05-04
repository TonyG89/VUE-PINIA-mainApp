<template>
  <div
    v-if="isOpen"
    class="backdrop"
    @click="closePopup"
  >
    <div class="popup" @click.stop>
      <h1>attent</h1>
      <slot></slot>
      <hr />
      <div class="footer">
        <slot name='actions'>
          <button @click="closePopup">cancel</button
          ><button @click="$emit('ok')">ok</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits({
  close: null,
  ok: null,
});

const closePopup = () => {
  emits('close');
};

const confirmPopup = () => {
  // emits.ok;
};

const handleKeydown = (e) => {
  console.log(e.key);
  if (props.isOpen && e.key === 'Escape') {
    console.log(e.key);
    console.log(props.isOpen);
    closePopup();
  }
};

onMounted(() => document.addEventListener('keydown', handleKeydown));

// TODO: fix this
// beforeUnmount(() => document.removeEventListener('keydown', handleKeydown));
</script>

<style scoped>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translate(-50%);
  position: fixed;
  z-index: 101;
  background: #e3b5b5;
}
.backdrop {
  background: rgba(0, 255, 60, 0.069);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
