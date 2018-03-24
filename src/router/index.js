import Vue from 'vue'
import Router from 'vue-router'
// COMPONENTS:
import Home from '@/components/Home'
import New from '@/components/New'
import HistoryPage from '@/components/HistoryPage'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      name: 'New',
      component: New
    },
    {
      path: '/history',
      name: 'History',
      component: HistoryPage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '*',
      redirect: '/login'
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
