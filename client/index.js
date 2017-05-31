import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import VueResource from 'vue-resource'
import authTokenHeader from './utils/auth/authTokenHeader'
import jwtDecode from 'jwt-decode'
import VueSocketIo from 'vue-socket.io';
import socketIoClient from 'socket.io-client'

const socket = socketIoClient('http://localhost:3000');


Vue.use(VueResource)
Vue.use(VueSocketIo, socket);

socket.on('connect', () => {
  console.log(socket.io.engine.id);
})



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