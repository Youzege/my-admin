import { createRouter, createWebHashHistory } from 'vue-router'

const publiceRoutes = [
  {
    path: '/',
    component: () => import('@/layout/index')
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publiceRoutes
})

export default router
