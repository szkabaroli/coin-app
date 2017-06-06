import { router } from '../router'
import Vue from 'vue'
import authTokenHeader from '../utils/auth/authTokenHeader'
import jwtDecode from 'jwt-decode'
import { socket } from '../socket.io/socket'

export default {
    SIGNUP_REQUEST: ({ commit }, userCreditentals) => {
        Ve.http.post('api/signup', userCreditentals).then(res => {
            commit('SET_SIGNUP_ERRORS')
            router.push({'path': '/'})
        }, ({data}) => {
            commit('SET_SIGNUP_ERRORS', data.errors)
        })
    },

    LOGIN_REQUEST: ({ commit, dispatch }, userCreditentals) => {
        
        Vue.http.post('api/auth', userCreditentals).then(({data}) => {
            commit('SET_LOGIN_ERRORS')
            localStorage.setItem('jwtToken', data.token)
            authTokenHeader(data.token)
            dispatch('SET_CURRENT_USER', jwtDecode(data.token))
            router.push('/projects')
        }, ({data}) => {
            commit('SET_LOGIN_ERRORS', data.errors)
        })
    },

    SET_CURRENT_USER: ({ commit }, user) => {
        commit('SET_USER', user)
    },

    LOGOUT: ({ commit, dispatch }) => {
        localStorage.removeItem('jwtToken')
        authTokenHeader(false)
        dispatch('SET_CURRENT_USER', false)
        dispatch('SET_PROJECTS', false)
        router.push('/login')
    },

    QUIZ_VALIDATE: ({ commit, state}, data) => {
        Vue.http.post('api/quiz/validate', { quizId: data.quizId }).then((response) => {
            router.push({ name: 'quizt', params: { id: data.quizId }}) 
            commit('SET_QUIZ_VALIDATE_ERRORS')
        }, ({data}) => {
            commit('SET_QUIZ_VALIDATE_ERRORS', data.errors)
        })
    },

    LOAD_PROJECTS: ({ commit }) => {
        Vue.http.get('api/projects', {params:  {userid: jwtDecode(localStorage.jwtToken).id }}).then(({data})=>{
            commit('SET_PROJECTS', data)
        })
    },

    socket_quizValidation: ({ commit }, data) => {
        if(data.success) {
            commit('SET_QUIZ_ID', data.quizId)
        } else {
            router.push('/')
        }
    },

    socket_nameValidation: ({ commit }, data) => {
        if(data.success) {
            commit('SET_QUIZ_NAME', data.name)
            commit('SET_PLAYERS_LIST', data.names)
            commit('SET_QUIZ_NAME_ERRORS')
        } else {
            commit('SET_QUIZ_NAME_ERRORS', data.errors)
        }
    },

    socket_playerJoinded: ({ commit, state }, data) => {
        if(state.quiz.name != null) {
            commit('ADD_PLAYER_TO_LIST', data.name)
        }
    },

    socket_playerLeave: ({ commit, state }, data) => {
        if(state.quiz.name != null) {
            commit('REMOVE_PLAYER_FROM_LIST', data.name)
        }
    },

    QUIZ_TO_DEFAULT: ({ commit }) => {
        commit('SET_QUIZ_NAME', false)
        commit('SET_QUIZ_ID', false)
        commit('SET_PLAYERS_LIST', false)
    }
}