<template>
<div>
    <h1 class="text-center">Lobby</h1>
    <table class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>Player Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(playerName, index) in otherPlayers">
                <td>{{index+1}}</td>
                <td>{{playerName}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            otherPlayers: 'QUIZ_OTHER_PLAYERS'
        })
    }
</script>