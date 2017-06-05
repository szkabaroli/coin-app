import Vue from 'vue'
import isEmpty from 'lodash/isEmpty'

export default {
    SET_SIGNUP_ERRORS: (state, errors) => {
        if(errors) {
            state.errors.signup = errors
        } else {
            state.errors.signup = {}
        }
    },
    SET_LOGIN_ERRORS: (state, errors) => {
        if(errors) {
            state.errors.login = errors
        } else {
            state.errors.login = {}
        }
    },
    SET_USER: (state, user) => {
        if(user) {
            state.auth.user = user
            state.auth.isAuthenticated = true
        } else {
            state.auth.user = {}
            state.auth.isAuthenticated = false
        }
    },
    SET_QUIZ_VALIDATE_ERRORS: (state, errors) => {
        if(errors) {
            state.errors.quiz.join = errors
        } else {
            state.errors.quiz.join = {}
        }
    },
    SET_PROJECTS: (state, projects) => {
        if(projects) {
            state.projects = projects
        } else {
            state.projects = []
        }
    }
}