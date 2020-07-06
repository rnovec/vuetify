import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import BaseLayout from '@/layouts/BaseLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: '/home',
    component: BaseLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/search',
        name: 'Search',
        component: Search
      }
    ]
  },
  {
    path: '*',
    name: '404',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
