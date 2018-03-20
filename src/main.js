import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
Vue.use(VueFire)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
let navBar = document.getElementById('navBar')
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 20) {
    navBar.style.transition = 'box-shadow .2s ease-in-out'
    navBar.style.boxShadow = '4px 2px 15px 3px rgba(13, 41, 69, .3)'
  } else {
    navBar.style.boxShadow = 'none'
  }
})
