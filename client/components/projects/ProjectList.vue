<template> 
    <table class="table">    
        <thead>
            <tr>
                <th class="text-left">Project ID</th>
                <th>Project title</th>
                <th class="text-right" >Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="project in projects">
                <td class="text-left">{{project.quizid}}</td>
                <td>{{project.title}}</td>
                <td class="text-right">
                    <button class="btn btn-warning">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            projects: 'PROJECTS'
        })
    }
</script>