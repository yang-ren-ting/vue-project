import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home/home'
import Me from '../page/me'
import Login from '../page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/me',
      component: Me,
    },
  ]
})
