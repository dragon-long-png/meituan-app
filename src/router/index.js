import Vue from 'vue'
import Router from 'vue-router'
import pageDefault from '@/layout/default'
import index from '@/page/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      component: pageDefault,
      redirect: '/index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: () => import('@/page/goodsList')
        },
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path: 'changeCity',
          name: 'changeCity',
          component: () => import('@/page/changeCity')
        },
        {
          path: 'details',
          name: 'details',
          component: () => import('@/page/details.vue')
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import('@/layout/blank'),
      children: [
        {
          path: 'register',
          name: 'register',
          component: () => import('@/page/register')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('@/page/login')
        }
      ]
    }
  ]
})
