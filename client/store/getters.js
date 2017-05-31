import Vue from 'vue'

export default {
    SIGNUP_ERRORS: state => {
        return state.errors.signup
    },
    LOGIN_ERRORS: state => {
        return state.errors.login
    },
    IS_AUTHENTICATED: state => {
        return state.auth.isAuthenticated
    }
}