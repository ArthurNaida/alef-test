import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/form',
      alias: '/',
      name: 'Форма',
      component: FormView
    },
    {
      path: '/preview',
      name: 'Превью',
      component: () => import('../views/PreviewView.vue')
    }
  ]
})

export default router
