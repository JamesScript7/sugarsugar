import Vue from 'vue'
import Router from 'vue-router'

// COMPONENTS:
import Home from '@/components/Home'
import New from '@/components/New'
import HistoryPage from '@/components/HistoryPage'

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
    }
  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
