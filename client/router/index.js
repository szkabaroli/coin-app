import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import SignupPage from '../components/signup/SignupPage.vue'
import LoginPage from '../components/login/LoginPage.vue'
import QuizPage from '../components/quiz/QuizPage.vue'
import QuizEnterPage from '../components/quiz/QuizEnterPage.vue'
import ProjectsPage from '../components/projects/ProjectsPage.vue'
import { socket } from '../socket.io/socket'

Vue.use(VueRouter)

const routes = [
  {path: '/signup', component: SignupPage},
  {path: '/login', component: LoginPage},
  {name:'quizt', path: '/quiz/:id', component: QuizPage},
  {path: '/quiz', component: QuizEnterPage},
  {path: '/projects', component: ProjectsPage}
]

export const router = new VueRouter({routes})