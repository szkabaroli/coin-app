<template>
    <form @submit.prevent="onSubmit">
        
        

        <div class="panel panel-default">
            <div class="panel-heading"><strong>Join to Lobby</strong></div>
            <div class="panel-body">
                <div class="alert alert-danger" v-if="errors.form">{{errors.form}}</div>

                <FormInput label="Quiz ID" type="text" v-model="query"></FormInput>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Join</button>
                </div>
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
                query: ''
            }
        },
        methods: {
            onSubmit() {
                console.log(this.query)
            }
        },
        computed: mapGetters({
            errors: 'LOGIN_ERRORS'
        }),
        components: {
            FormInput
        }
    }
</script>
