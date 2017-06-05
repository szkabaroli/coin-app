<template>  
    <h1>Q</h1>
</template>

<script>
import store from '../../store'
import Vue from 'vue'

    export default {
        beforeRouteEnter(to, from, next) {
            store.dispatch('join_quiz')
            next()
        },
        beforeRouteUpdate(to, from, next) {
            store.dispatch('join_quiz')
            next()
        }
    }
</script>