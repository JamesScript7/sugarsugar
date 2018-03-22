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
window.onload = function () {
  let navBar = document.getElementById('navBar')
  let newBtn = document.getElementById('new-btn')
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 10) {
      if (window.pageYOffset > 600 && (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i))
      ) {
        newBtn.style.display = 'inline-block'
      }
      navBar.style.transition = 'box-shadow .2s ease-in-out'
      navBar.style.boxShadow = '4px 2px 15px 3px rgba(13, 41, 69, .3)'
    } else {
      newBtn.style.display = 'none'
      navBar.style.boxShadow = 'none'
    }
  })
}
