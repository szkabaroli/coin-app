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
    SET_QUIZ_NAME_ERRORS: (state, errors) => {
        if(errors) {
            state.errors.quiz.name = errors
        } else {
            state.errors.quiz.name = {}
        }
    },
    SET_PROJECTS: (state, projects) => {
        if(projects) {
            state.projects = projects
        } else {
            state.projects = []
        }
    },
    SET_QUIZ_ID: (state, id) => {
        if(id) {
            state.quiz.id = id
        } else {
            state.quiz.id = null
        }
    },
    SET_QUIZ_NAME: (state, name) => {
        if(name) {
            state.quiz.name = name
        } else {
            state.quiz.name = null
        }
    },
    ADD_PLAYER_TO_LIST: (state, name) => {
        state.quiz.otherPlayers.push(name)
    },
    REMOVE_PLAYER_FROM_LIST: (state, name) => {
        const index = state.quiz.otherPlayers.indexOf(name)
        if(index != -1) {
            state.quiz.otherPlayers.splice(index, 1)
        }
    },
    SET_PLAYERS_LIST: (state, names) => {
        if(names) {
            names.unshift(state.quiz.name)
            state.quiz.otherPlayers = names
        } else {
            state.quiz.otherPlayers = []
        }
    }
}