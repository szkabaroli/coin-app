<template>
    <form @submit.prevent="onSubmit">
        <h1>Login</h1>
        
        <div class="alert alert-danger" v-if="errors.form">{{errors.form}}</div>

        <FormInput label="Username or email" type="text" v-model="user.identifier"></FormInput>
        <FormInput label="Password" type="password" v-model="user.password"></FormInput>

        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>

    </form>
</template>

<script>
    import FormInput from '../common/FormInput.vue'
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                user: {
                    identifier: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch('LOGIN_REQUEST', this.user)
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