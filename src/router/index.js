import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import('../views/Home.vue')
  },

  {
    path: '/modules',
    name: 'modules',
    component: () => import('../views/Modules.vue')
  },

  {
    path: '/module/:name',
    name: 'Module Preview',
    component: () => import('../views/ModuleView.vue')
  },
  {
    path: '/Community',
    name: 'Community ',
    component: () => import('../views/Community.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
