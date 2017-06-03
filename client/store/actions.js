import { router } from '../router'
import Vue from 'vue'
import authTokenHeader from '../utils/auth/authTokenHeader'
import jwtDecode from 'jwt-decode'
import { socket } from '../socket.io/socket'
import axios from 'axios'

export default {
    SIGNUP_REQUEST: ({ commit }, userCreditentals) => {
        axios.post('api/signup', userCreditentals).then(res => {
            commit('SET_SIGNUP_ERRORS')
            router.push({'path': '/'})
        }, ({data}) => {
            commit('SET_SIGNUP_ERRORS', data.errors)
        })
    },
    LOGIN_REQUEST: ({ commit, dispatch }, userCreditentals) => {
        
        axios.post('api/auth', userCreditentals).then(({data}) => {
            commit('SET_LOGIN_ERRORS')
            localStorage.setItem('jwtToken', data.token)
            authTokenHeader(data.token)
            dispatch('SET_CURRENT_USER', jwtDecode(data.token))
            router.push({'path': '/'})
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

    },
    QUIZ_ENTER: ({ commit }, data) => {
        socket.on('connect', ()=>{
            axios.post('api/quiz', {socketId: socket.io.engine.id, quizId: data})
        })
    }

}