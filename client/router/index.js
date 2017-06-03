import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import SignupPage from '../components/signup/SignupPage.vue'
import LoginPage from '../components/login/LoginPage.vue'
import QuizPage from '../components/quiz/QuizPage.vue'
import QuizEnterPage from '../components/quiz/QuizEnterPage.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/signup', component: SignupPage},
  {path: '/login', component: LoginPage},
  {path: '/quiz/:id', beforeEnter: (to, from, next) => {
    store.dispatch('QUIZ_ENTER', to.params.id)
    next()
  }, component: QuizPage},
  {path: '/quiz', component: QuizEnterPage}
]

export const router = new VueRouter({routes})