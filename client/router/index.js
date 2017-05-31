import Vue from 'vue'
import VueRouter from 'vue-router'
import SignupPage from '../components/signup/SignupPage.vue'
import LoginPage from '../components/login/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/signup', component: SignupPage},
  {path: '/login', component: LoginPage}
]

export const router = new VueRouter({routes})