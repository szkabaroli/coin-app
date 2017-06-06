<template>
<div class="col-md-4 col-md-offset-4">
    <form @submit.prevent="onSubmit">
            <h1>Choose nickname</h1>

            <div class="alert alert-danger" v-if="errors.form">{{errors.form}}</div>

            <FormInput label="Display name" type="text" v-model="displayName"></FormInput>

            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg">Join</button>
            </div>

    </form>
</div>
</template>

<script>
    import FormInput from '../common/FormInput.vue'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                displayName: ''
            }
        },
        methods: {
            onSubmit() {
                this.$socket.emit('setName', {quizId: this.quizId, displayName: this.displayName})
            }
        },
        computed: mapGetters({
            errors: 'QUIZ_NAME_ERRORS',
            quizId: 'QUIZ_ID'
        }),
        components: {
            FormInput
        }
    }
</script>
