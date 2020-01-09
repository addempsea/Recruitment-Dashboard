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
    path: '/Assessment',
    name:'Assessment ',
    component: () => import(/* webpackChunkName: "Assessment" */ '../components/Assessment.vue')
  },
  {
    path: '/takeAssessment',
    name:'takeAssessment ',
    component: () => import(/* webpackChunkName: "takeAssessment" */ '../views/takeAssessment.vue')
  },
  {
    path: '/question',
    name:'question ',
    component: () => import(/* webpackChunkName: "question" */ '../views/question.vue')
  },
  {
    path: '/successfulPage',
    name:'successfulPage ',
    component: () => import(/* webpackChunkName: "successfulPage" */ '../views/successfulPage.vue')
  },
  {
    path: '/applicantSignup',
    name:'applicantSignup ',
    component: () => import(/* webpackChunkName: "applicantSignup" */ '../views/applicantSignup.vue')
  },
  {
    path: '/QuestionPage',
    name:'QuestionPage ',
    component: () => import(/* webpackChunkName: "QuestionPage" */ '../components/QuestionPage.vue')
  },
  {
    path: '/Success',
    name:'Success ',
    component: () => import(/* webpackChunkName: "Success" */ '../components/Success.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
