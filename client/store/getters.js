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
    QUIZ_NAME_ERRORS: state => {
        return state.errors.quiz.name
    },
    PROJECTS: state => {
        return state.projects
    },
    IS_AUTHENTICATED: state => {
        return state.auth.isAuthenticated
    },
    QUIZ_NAME: state => {
        return state.quiz.name
    },
    QUIZ_ID: state => {
        return state.quiz.id
    },
    QUIZ_OTHER_PLAYERS: state => {
        return state.quiz.otherPlayers
    }
}