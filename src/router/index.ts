import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    {
      path: '/tabNav',
      name: 'tabNav',
      component: () => import('@/views/tabNav/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/index.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('@/views/order/index.vue')
        },
        {
          path: '/me',
          name: 'me',
          component: () => import('@/views/me/index.vue')
        }
      ]
    }
  ]
})

export default router
