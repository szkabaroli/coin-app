<template>
<div>
    <NavBar></NavBar>
    <div class="container">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import NavBar from './components/NavigationBar.vue'


export default {
    components: {
        NavBar
    }
}
</script>

<style lang="css">
    body, html {
        margin: 0;
        padding: 0;
    }
</style>