<template>
    <form @submit.prevent="onSubmit">
        <h1>Signup</h1>
        
        <FormInput label="Username" type="text" v-model="user.username" :error="errors.username"></FormInput>
        <FormInput label="E-mail" type="text"  v-model="user.email" :error="errors.email"></FormInput>
        <FormInput label="Password" type="password"  v-model="user.password" :error="errors.password"></FormInput>
        <FormInput label="Confirm password" type="password"  v-model="user.passwordConfirm" :error="errors.passwordConfirm"></FormInput>

        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-lg">Signup</button>
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
                    username: '',
                    email: '',
                    password: '',
                    passwordConfirm: ''
                }
            }
        },
        components: {
            FormInput
        },
        computed: mapGetters({
            errors: 'SIGNUP_ERRORS'
        }),
        methods: {
            onSubmit(event) {
                this.$store.dispatch('SIGNUP_REQUEST', this.user)
            }
        }
    }
</script>