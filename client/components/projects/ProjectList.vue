<template> 
<div>
    <h1>Projects</h1>
    <div class="panel">

        <router-link to="/newproject" class="btn btn-primary pull-right">New Quiz</router-link>
    </div>
    <table class="table">    
        <thead>
            <tr>
                <th class="text-left">Project ID</th>
                <th class="text-left">Project title</th>
                <th class="text-right" >Actions</th>
            </tr>
        </thead>
        <tbody>
            <ListItem v-for="project in projects" :quizId="project.quizid" :title="project.title"></ListItem>
        </tbody>
    </table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import ListItem from './ListItem.vue'
    export default {
        computed: mapGetters({
            projects: 'PROJECTS'
        }),
        components: {
            ListItem
        }
    }
</script>