import { router } from '../router'
import Vue from 'vue'
import authTokenHeader from '../utils/auth/authTokenHeader'
import jwtDecode from 'jwt-decode'

export default {
    SIGNUP_REQUEST: ({ commit }, userCreditentals) => {
        Vue.http.post('api/signup', userCreditentals).then(res => {
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

    }

}