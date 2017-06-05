import Vue from 'vue'

export default {
    SIGNUP_ERRORS: state => {
        return state.errors.signup
    },
    LOGIN_ERRORS: state => {
        return state.errors.login
    },
    QUIZ_VALIDATE_ERRORS: state => {
        return state.errors.quiz.join
    },
    PROJECTS: state => {
        return state.projects
    },
    IS_AUTHENTICATED: state => {
        return state.auth.isAuthenticated
    }
}