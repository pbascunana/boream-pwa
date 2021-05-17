import Vue from 'vue'
import VueRouter from 'vue-router'
import FindUsers from '@/views/FindUsers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'findUsers',
    component: FindUsers
  },
  {
    path: '/userDetails',
    name: 'userDetails',
    component: () => import('@/views/UserDetails.vue'),
    props: true
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: () => import('@/views/FavouriteList.vue'),
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
