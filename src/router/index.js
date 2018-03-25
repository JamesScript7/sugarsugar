import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

// COMPONENTS:
import Home from '@/components/Home'
import New from '@/components/New'
import HistoryPage from '@/components/HistoryPage'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'
import Card from '@/components/Card'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
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
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/new',
      name: 'New',
      component: New,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/home/:id',
      name: 'Card',
      component: Card,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/history',
      name: 'History',
      component: HistoryPage,
      meta: {
        requiresAuth: true
      }
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

// Global Navigation Guard
router.beforeEach(function (to, from, next) {
  let currentUser = firebase.auth().currentUser
  // console.log(currentUser)
  // To see if route has meta: { requiresAuth: true }
  let requiresAuth = to.matched.some(function (rec) {
    return rec.meta.requiresAuth
  })
  // console.log(requiresAuth)
  if (requiresAuth && !currentUser) {
    next('login')
  } else if (!requiresAuth && currentUser) {
    next('home')
  } else {
    next()
  }
})

export default router
