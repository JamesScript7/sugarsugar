import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.config.productionTip = false
let app

firebase.auth().onAuthStateChanged(function (user) {
  // user will be true or false
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
