<template>
  <v-row class="py-6">
    <v-col md="8">
      <v-card>
        <v-card-title class="text-capitalize">корзина</v-card-title>
        <v-card-text v-if="addedList.length">
          <div v-for="item in addedList" :key="item.id" class="mb-3">
            <v-row>
              <v-col sm="4">
                <div class="d-flex">
                  <img
                    src="@/assets/img/hoody.svg"
                    alt=""
                    style="width:90px;height:90px object-fit:cover;"
                  />
                  <h3>item.name</h3>
                </div>
              </v-col>
              <v-col sm="8">
                <div class="d-flex h-100 w-full">
                  <div class="d-flex">
                    <span
                      class="icon d-flex"
                      style="cursor: pointer"
                      @click="cartStore.add(item.id)"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </span>
                    <span class="number d-flex">{{ item.quantity }}</span>
                    <!-- <span
                      class="icon d-flex"
                      style="cursor: pointer"
                      @click="cartStore.remove(item.id)"
                    >
                      <v-icon>mdi-minus</v-icon>
                    </span> -->
                  </div>
                  <p>{{ item.quantity * item.price }} <strong>sum</strong></p>
                  <!-- <v-btn @click="cartStore.removeProduct(item.id)" icon>
                    <v-icon color="red">mdi-delete</v-icon>
                  </v-btn> -->
                </div>
              </v-col>
            </v-row>
          </div>
        </v-card-text>
        <v-card-text class="text-center" v-else>
          <v-btn class="mx-auto" @click="$router.push('/')" color="primary">
            Кошик порожній
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col>
      <v-card class="py-5">
        <v-card-title class="mb-5">Сума вашого замовлення:</v-card-title>
        <v-card-text>
          <div class="d-flex">
            <p>subtotal</p>
            <p class="text-primary">${{ cartStore.total }}</p>
          </div>
          <div class="d-flex">
            <p>dostavka</p>
            <p class="text-primary">$75</p>
          </div>
          <div class="d-flex">
            <p>order total</p>
            <p class="text-primary">$0</p>
          </div>
          <v-btn block>checkout</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';
// import cart from '@/stores/cart';
// import clothes from '@/data.js';
// import svgImages from '@/svgImages';
// import stData from '@/staticData';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const addedList = ref(cartStore.infoCart);
console.log(addedList.value);
console.log(cartStore);
</script>

<style lang="scss" scoped></style>
