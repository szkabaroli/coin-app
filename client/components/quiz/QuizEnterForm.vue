<template>
    <form @submit.prevent="onSubmit">
            <h1>Join to Lobby</h1>

            <div class="alert alert-danger" v-if="errors.form">{{errors.form}}</div>

            <FormInput label="Quiz ID" type="text" v-model="quizId"></FormInput>

            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg">Join</button>
            </div>
        </div>

    </form>
</template>

<script>
    import FormInput from '../common/FormInput.vue'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                quizId: ''
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('QUIZ_VALIDATE', { quizId: this.quizId})
            }
        },
        computed: mapGetters({
            errors: 'QUIZ_VALIDATE_ERRORS'
        }),
        components: {
            FormInput
        }
    }
</script>
