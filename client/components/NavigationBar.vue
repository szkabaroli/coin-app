<template>
    <nav class="navbar  navbar-default" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">Coinz</a>
            </div>
            <div class="">
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="!isAuth">
                        <router-link to="/signup">Signup</router-link>
                    </li>
                    <li v-if="!isAuth">
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li v-if="isAuth">
                        <a href="#" @click.prevent="Logout()" >Logout</a>
                    </li>
                </ul>
            </div>
        </div>
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        computed: mapGetters({
            isAuth: 'IS_AUTHENTICATED'
        }),
        methods: mapActions({
            Logout: 'LOGOUT'
        })
    }
</script>

<style lang="css">

</style>