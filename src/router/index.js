import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/signUp',
    name:'sign up',
    component: () => import(/* webpackChunkName: "signUp" */ '../views/signUp.vue')
  },
  {
    path: '/appForm',
    name:'application form ',
    component: () => import(/* webpackChunkName: "appForm" */ '../views/appForm.vue')
  },
  {
    path: '/applicantSidebar',
    name:'applicantSidebar ',
    component: () => import(/* webpackChunkName: "applicantSidebar" */ '../components/applicantSidebar.vue')
  },
  {
    path: '/applicantDashboard',
    name:'applicantDashboard ',
    component: () => import(/* webpackChunkName: "applicantDashboard" */ '../views/applicantDashboard.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
