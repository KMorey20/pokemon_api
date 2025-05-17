// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MoreDetailsView from '@/views/MoreDetailsView.vue'
import AboutView from '@/views/AboutView.vue'
import GuideView from '@/views/GuideView.vue'
import GenView from '@/views/GenView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pokemon/:name',
    name: 'pokemon-details',
    component: MoreDetailsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/guide',
    name:'guide',
    component: GuideView
  },
  {
    path:'/generations',
    name:'generations',
    component: GenView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
