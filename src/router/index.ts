import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/pages/ProductsPage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/AboutPage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/ContactPage.vue'),
    },
  ],
})

export default router
