<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-btn @click="toggleGrid" :class="{ 'bg-primary': grid }">
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        <v-btn
          @click="toggleGrid"
          :class="{ 'bg-secondary': !grid }"
          class="ml-3"
        >
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="my-6" />
    <v-row>
      <v-col cols="12">
        <v-row v-show="!grid">
          <v-col v-for="item in clothes" :key="item.id" cols="12" lg="4" sm="6">
            <!-- КОМПОНЕНТ КАРТОЧКА -->
            <v-card class="">
              <v-img :src="svgImages[item.category]" height="200px">
                <template #placeholder>
                  <v-row class="fill-height ma-0" justify="center">
                    <v-progress-circular
                      color="red"
                      indeterminate
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title class="text-capitalize">
                {{ item.title }}
                <span class="text-lowercase text-grey">{{ item.color }}</span>
              </v-card-title>
              <v-card-subtitle>
                Ціна:
                <ins
                  class="text-subtitle-1 font-weight-bold text-decoration-none"
                  >{{ item.price }} uah</ins
                ><sup class="text-body-2 text-red"
                  ><del> {{ item.price + 100 }}uah </del></sup
                >
              </v-card-subtitle>
              <v-card-text
                >Размер:<span
                  v-for="size in item.size"
                  :key="size"
                  class="border rounded px-1 mx-1"
                  >{{ size }}</span
                ></v-card-text
              >
              <v-card-text
                >Цвета:
                <span v-for="color in item.color" :key="color">{{
                  color
                }}</span></v-card-text
              >
              <v-card-text
                >Бренд:
                <v-spacer class="my-2">
                  <v-btn
                    v-for="brand in stData.brand"
                    class="text-subtitle-2"
                    border
                    :key="brand"
                    >{{ brand }}</v-btn
                  >
                </v-spacer>
              </v-card-text>
              <v-toolbar class="px-4">
                {{ 'Текст с описанием продукта' }}
              </v-toolbar>
              <v-card-actions>
                <v-btn
                  color="secondary"
                  width="100%"
                  :clothes-id="item.id"
                  border
                  text
                  @click="addToCart"
                  >У кошик</v-btn
                >
              </v-card-actions>
            </v-card>
            <!--  -->
          </v-col>
        </v-row>
        <v-row v-show="grid">
          <!-- КОМПОНЕНТ КАРТОЧКА -->
          <v-col v-for="item in clothes" :key="item.id" class="" cols="12">
            <v-card class="d-flex">
              <v-col cols="4">
                <v-img :src="svgImages[item.category]" height="200px">
                  <template #placeholder>
                    <v-row class="fill-height ma-0" justify="center">
                      <v-progress-circular
                        color="red"
                        indeterminate
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>

                <v-card-text
                  >Размер:<span
                    v-for="size in item.size"
                    :key="size"
                    class="border rounded px-1 mx-1"
                    >{{ size }}</span
                  ></v-card-text
                ><v-card-text
                  >Бренд:
                  <v-btn
                    v-for="brand in stData.brand"
                    class="text-subtitle-2"
                    border
                    :key="brand"
                    >{{ brand }}</v-btn
                  >
                </v-card-text>
              </v-col>
              <v-col cols="12" md="8" class="">
                <v-card-title class="text-capitalize">
                  {{ item.title }}
                  <span class="text-lowercase text-grey">{{ item.color }}</span>
                </v-card-title>
                <v-card-subtitle>
                  Ціна:
                  <ins
                    class="text-subtitle-1 font-weight-bold text-decoration-none"
                    >{{ item.price }} uah</ins
                  ><sup class="text-body-2 text-red"
                    ><del> {{ item.price + 100 }}uah </del></sup
                  >
                </v-card-subtitle>

                <v-card-text
                  >Цвета:
                  <span v-for="color in item.color" :key="color">{{
                    color
                  }}</span></v-card-text
                >

                <v-toolbar class="px-4 ma-2" height="150" rounded>
                  {{ 'Текст с описанием продукта' }}
                </v-toolbar>
                <v-card-actions>
                  <v-btn
                    position="bottom"
                    color="secondary"
                    width="100%"
                    :clothes-id="item.id"
                    border
                    text
                    @click="addToCart"
                    >У кошик</v-btn
                  >
                </v-card-actions>
              </v-col>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <ItemList />
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import clothes from '../data.js';
import svgImages from '../svgImages';
import stData from '../composables/staticData';
import ItemList from '../components/ItemList.vue';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();

// Список всех товаров на странице (масив объектов) [{}]
const clothesList = ref([]);
clothesList.value = clothes;

// ВЫВОД ТОВАРОВ - СЕТКА TOOGLE GRID
const grid = ref(false);

const toggleGrid = () => {
  grid.value = !grid.value;
};

// Добавление айди товара в корзину
const addToCart = (e) => {
  const clothesId = e.currentTarget.getAttribute('clothes-id');
  // console.log(e.currentTarget.parentNode.parentNode.textContent);
  cartStore.add(clothesId);
  console.log(cartStore);
};
</script>

<style lang="scss" scoped></style>
