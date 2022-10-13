import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import realtimechat from '../views/realtimechat.vue'
import Home from '@/views/HomeView.vue'
const routes = [
  {
    path: '/chat',
    name: 'Realtimechat',
    component: realtimechat
  },
  {
    path: '/Login',
    name: 'Login',
    component: login
  },
  {
    path: '/',
    name: 'home',
    component : Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
