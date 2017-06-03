import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import authTokenHeader from './utils/auth/authTokenHeader'
import jwtDecode from 'jwt-decode'
import VueSocketIo from 'vue-socket.io'
import { socket } from './socket.io/socket'

Vue.use(VueSocketIo, socket, store);

Vue.http.crossorigin = true;


const v = new Vue({
  el: '#app',
  store,
  router,
  render(h) {
    return h(App)
  }
})

if (localStorage.jwtToken) {
    authTokenHeader(localStorage.jwtToken)
    store.dispatch('SET_CURRENT_USER', jwtDecode(localStorage.jwtToken))
}