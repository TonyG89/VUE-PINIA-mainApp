import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/index.vue'
import Cart from '../views/Cart.vue'
import E404 from '../views/404.vue'
// NOT WORKING IN NUXT NOW
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/:pathMatch(.*)*', component: E404}
  ]
})  