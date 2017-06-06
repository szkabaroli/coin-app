import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router'
import authTokenHeader from './utils/auth/authTokenHeader'
import jwtDecode from 'jwt-decode'
import VueResource from 'vue-resource'
import io from 'socket.io-client'
import VueSocketIo from 'vue-socket.io'

const socket = io('http://localhost:3000')
Vue.use(VueResource)




if (localStorage.jwtToken) {
      socket['jwt'] = localStorage.jwtToken
      authTokenHeader(localStorage.jwtToken)
      store.dispatch('SET_CURRENT_USER', jwtDecode(localStorage.jwtToken))
}
Vue.use(VueSocketIo, socket, store);



const vm = new Vue({
  el: '#app',
  store,
  router,
  render(h) {
    return h(App)
  }
})

router.beforeEach((to, from, next)=> {
  console.log(from.name && from.name == 'quizt' ? vm.$socket.emit('leaveQuiz', {quizId: from.params.id}) && store.dispatch('QUIZ_TO_DEFAULT') : false)
  next()
})