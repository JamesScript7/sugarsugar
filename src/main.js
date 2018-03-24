import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.use(VueFire)

Vue.config.productionTip = false
let app
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
// BOX SHADOW EFFECT
window.onload = function () {
  let navBar = document.getElementById('navBar')
  window.addEventListener('scroll', function (e) {
    if (window.pageYOffset > 10) {
      this.navBar.style.transition = 'box-shadow .2s ease-in-out'
      this.navBar.style.boxShadow = '4px 2px 15px 3px rgba(13, 41, 69, .3)'
    } else {
      this.navBar.style.boxShadow = 'none'
    }
  })
}
