import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import SignupPage from '../components/signup/SignupPage.vue'
import LoginPage from '../components/login/LoginPage.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/signup', component: SignupPage},
  {path: '/login', component: LoginPage},
  {path: '/room/:id', beforeEnter: (to, from, next) => {
    store.dispatch('ROOM_ENTER', {roomId: to.params.id, socketId: localStorage.socketId})
    next()
  }}
]

export const router = new VueRouter({routes})