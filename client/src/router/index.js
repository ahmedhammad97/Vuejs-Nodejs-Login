import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Register from '@/components/Register'
import Login from '@/components/Login'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
