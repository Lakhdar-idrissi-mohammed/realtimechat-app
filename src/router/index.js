import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'
import realtimechat from '../views/realtimechat.vue'
import AboutViewVue from '@/views/AboutView.vue'
const routes = [
  {
    path: '/',
    name: 'Realtimechat',
    component: realtimechat
  },
  {
    path: '/Login',
    name: 'Login',
    component: login
  },
  {
    path: '/about',
    name: 'about',
    component : AboutViewVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
