import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/index.vue'
import Cart from './views/Cart.vue'
import E404 from './views/404.vue'


const history = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart,
    // () => import('./views/Card.vue')
  },
  // {
  //   path: '/card/:id',
  //   component: Card,
  //   // () => import('./views/Card.vue')
  // },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: E404
  },
]

const router = createRouter({ history, routes })

export default router