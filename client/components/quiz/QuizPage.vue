<template>  
    <div>
        <QuizNameForm v-if="name == null"></QuizNameForm>
        <QuizLobby v-else></QuizLobby>
    </div>
</template>

<script>
import QuizNameForm from './QuizNameForm.vue'
import QuizLobby from './QuizLobby.vue'
import { mapGetters } from 'vuex'

    export default {
        beforeRouteEnter(to, from, next) {
            next(vm => { vm.$socket.emit('validateQuizAndJoin', { quizId: to.params.id }) })
        },
        beforeRouteUpdate(to, from, next) {
            this.$socket.emit('validateQuizAndJoin', { quizId: to.params.id })
            next()
        },
        computed: mapGetters({
            name: 'QUIZ_NAME'
        }),
        components: {
            QuizNameForm,
            QuizLobby
        }
    }
</script>