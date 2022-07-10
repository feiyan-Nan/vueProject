import { ErrorComputer } from '@icon-park/vue-next'
import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/core/error',
  component: () => import('@@/App.vue'),
  meta: { order: 3, auth: true, menu: { title: '错误页面', icon: ErrorComputer } },
  children: [
    {
      name: 'addon.error.404',
      path: '',
      component: () => import('@@/addon/errors/404.vue'),
      meta: { menu: { title: '404页面' } },
    },
    {
      name: 'addon.error.403',
      path: '403',
      component: () => import('@@/addon/errors/403.vue'),
      meta: { menu: { title: '403页面' } },
    },
    {
      name: 'addon.error.500',
      path: '500',
      component: () => import('@@/addon/errors/500.vue'),
      meta: { menu: { title: '500页面' } },
    },
    {
      path: '/:any(.*)',
      name: 'notFound',
      component: () => import('@@/addon/errors/404.vue'),
    },
  ],
} as RouteRecordRaw