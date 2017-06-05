<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <ProjectList></ProjectList>
        </div>
    </div>
</template>

<script>
import store from '../../store'
import ProjectList from './ProjectList.vue'

    export default {
        beforeRouteEnter(to, from, next) {
            store.dispatch('LOAD_PROJECTS')
            next()
        },
        components: { ProjectList }
    }
</script>