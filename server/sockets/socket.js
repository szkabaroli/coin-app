import validateQuiz from '../shared/validations/quiz'
import Multimap from 'multimap'

let players = {}

export default io => {
    io.on('connection', socket => {
        

        socket.on('validateQuizAndJoin', (data) => {
            validateQuiz(data.quizId).then(() => {
                players[socket.id] = { socket: socket, room: data.quizId }
                socket.join(data.quizId)
                socket.emit('quizValidation', { success: true, quizId: data.quizId })
            }).catch(() => {
                socket.emit('quizValidation', { success: false })
            })
        })
        socket.on('setName', data => {

            let names = getPlayerNamesInRoom(data.quizId)

            if(names.indexOf(data.displayName) == -1) {
                players[socket.id]['name'] = data.displayName
                socket.broadcast.to(players[socket.id].room).emit('playerJoinded', {name: data.displayName})
                socket.emit('nameValidation', { success: true , name: data.displayName, names: names})
            } else {
                socket.emit('nameValidation', { success: false, errors: { form: 'This name in use'}})
            }

        })

        socket.on('leaveQuiz', data => {
            if(players[socket.id]) {
                if(players[socket.id].name != undefined) {
                    socket.broadcast.to(players[socket.id].room).emit('playerLeave', { name: players[socket.id].name })
                }
                socket.leave(players[socket.id].room)
                delete players[socket.id]
            }
            
        })
        socket.on('disconnect', ()=> {
            if(players[socket.id]) {
                if(players[socket.id].name != undefined) {
                    socket.broadcast.to(players[socket.id].room).emit('playerLeave', { name: players[socket.id].name })
                }
                socket.leave(players[socket.id].room)
                delete players[socket.id]
            }
        })
    })
}

function getPlayerNamesInRoom(room) {
    const names = []
    for(let player in players){
        if(players[player].room == room) {
            if(players[player].name != null) {
                names.push(players[player].name)
            }
        }
    }
    return names
} 