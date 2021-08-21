import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Receive from '../views/Receive.vue'
import Send from '../views/Send.vue'
import Import from '../views/Import.vue'
import Export from '../views/Export.vue'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/receive',
    name: 'Receive',
    component: Receive
  },
  {
    path: '/send',
    name: 'Send',
    component: Send
  },
  {
    path: '/import',
    name: 'Import',
    component: Import
  },
  {
    path: '/export',
    name: 'Export',
    component: Export
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const wallet = JSON.parse(localStorage.getItem('wallet'))
  if (wallet && wallet != undefined) store.state.wallet.wallet = wallet
  next()
})

export default router
