import Vue from 'vue'

export default {
    errors: {
        signup: {},
        login: {},
        quiz: {
            join: {},
            name: {}
        }
    },
    auth: {
        isAuthenticated: false,
        user: {}
    },
    projects: [],
    quiz: {
        id: null,
        name: null,
        otherPlayers: [] 
    }
}