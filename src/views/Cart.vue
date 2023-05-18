<template>
  <v-row class="py-6">
    <v-col md="8">
      <v-card>
        <v-card-title class="text-capitalize">Корзина</v-card-title>
        <v-card-text v-if="cartStore.infoCart.length">
          <div v-for="item in cartState.addedList" :key="item.id" class="mb-3">
            <v-row>
              <v-col sm="4">
                <div class="d-flex">
                  <img
                    src="../assets/img/hoody.svg"
                    alt=""
                    style="width:90px;height:90px object-fit:cover;"
                  />
                  <div class="d-flex flex-column border">
                    <h2>{{ item.name }}</h2>
                    <i>{{ item.info }}</i>
                    <h3>{{ item.price }}грн х {{ item.quantity }}шт.</h3>
                  </div>
                </div>
              </v-col>
              <v-col sm="8">
                <div class="d-flex h-100 w-full">
                  <div class="d-flex">
                    <span
                      class="icon d-flex"
                      style="cursor: pointer"
                      @click="cartStore.plus(item.id)"
                    >
                      <v-icon>mdi-plus</v-icon>
                    </span>
                    <span class="number d-flex">{{ item.quantity }}</span>
                    <span
                      class="icon d-flex"
                      style="cursor: pointer"
                      @click="cartStore.minus(item.id)"
                    >
                      <v-icon>mdi-minus</v-icon>
                    </span>
                  </div>
                  <p>
                    {{ item.quantity * item.price }} {{ cart }}
                    <strong>sum</strong>
                  </p>
                  <v-btn @click="cartStore.remove(item.id)" icon>
                    <v-icon color="red">mdi-delete</v-icon>
                  </v-btn>
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
            <p class="text-primary">Сума замовлення: ${{ cartState.total }}</p>
          </div>
          <div class="d-flex">
            <p>dostavka</p>
            <p class="text-primary">
              Кількість речей: 6 ---
              {{ cartStore.countInCartGetter }} штук
            </p>
          </div>
          <div class="d-flex">
            <p>order total</p>
            <p class="text-primary">
              Середня вартість речей{{ cartState.averageSum }}
            </p>
          </div>
          <v-btn block>checkout</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed, ref } from 'vue';
// import cart from '@/stores/cart';
// import clothes from '@/data.js';
// import svgImages from '@/svgImages';
// import stData from '@/staticData';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
const addedList = ref(cartStore.infoCart);
console.log(addedList);
console.log(cartStore.infoCart);
// debugger
const cartState = computed(() => ({
  addedList: cartStore.infoCart,
  averageSum: cartStore.total / cartStore.countInCartGetter,
  total: cartStore.total,
}));

const plusItem = () => {
  console.log(e);
  console.log(item.id);
  cartStore.plus(item.id);
};
</script>

<style lang="scss" scoped></style>
