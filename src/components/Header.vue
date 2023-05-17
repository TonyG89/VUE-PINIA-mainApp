<template>
  <v-app-bar>
    <v-toolbar-title class="pointer" @click="this.$router.replace('/')">
      <v-icon x-large>mdi-youtube</v-icon>TooMuch
    </v-toolbar-title>
    <v-spacer />
    <router-link to="/">Home</router-link>
    <!-- <v-divider/> -->
    <router-link to="/cart">Cart</router-link>
    <router-link to="/404">404</router-link>
    <v-spacer />
    <v-btn class="text-none" stacked @click="this.$router.replace('/cart')">
      <v-badge
        :dot="!cartStore.countInCart"
        :content="cartStore.countInCart"
        color="amber-lighten-2"
      >
        <v-icon>mdi-cart-outline </v-icon>
      </v-badge>
      телега
    </v-btn>
    <v-btn
      class="text-none"
      :prepend-icon="
        theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
      "
      ><v-spacer /> <span>Toogle Theme</span></v-btn
    >
  </v-app-bar>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
console.log(cartStore.countInCart);
</script>

<style lang="scss" scoped>
a {
  margin: 0 5px;
  text-decoration: none;
  font-weight: 700;
}
.pointer {
  cursor: pointer;
}
</style>
