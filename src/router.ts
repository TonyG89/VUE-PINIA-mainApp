import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./views/Home.vue')

const history = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/card/:id',
    component: () => import('./views/Card.vue')
  }
]

const router = createRouter({ history, routes })

export default router