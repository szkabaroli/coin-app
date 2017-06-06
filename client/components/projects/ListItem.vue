<template>
    <tr>
        <td class="text-left">{{quizId}}</td>
        <td class="text-left">{{title}}</td>
        <td class="text-right">
            <button @click="onStart" class="btn btn-success btn-md">Start</button>
            <button @click="onEdit" class="btn btn-warning btn-md">Edit</button>
            <button @click="onDelete" class="btn btn-danger btn-md">Delete</button>
        </td>
    </tr>
</template>

<script>
    export default {
        props: ['quizId', 'title'],
        methods: {
            onEdit() {
                console.log('edit:' + this.quizId)
            },
            onDelete() {
                console.log('delete:' + this.quizId)
            },
            onStart() {
                
            }
        }
    }
</script>