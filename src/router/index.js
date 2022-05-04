import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myingredients',
    name: 'MyIngredients',
    component: () => import('../views/MyIngredients.vue')
  },
  {
    path: '/allingredients',
    name: 'AllIngredients',
    component: () => import('../views/AllIngredients.vue')
  },
  {
    path: '/random',
    name: 'Random',
    component: () => import('../views/Random.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
