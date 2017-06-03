import db from '../models'
import http from 'http'
import io from 'socket.io'
import {app} from '../app'

const quizController = {}

const rooms = []

function validateRoom(room) {

}

quizController.post = (req, res) => {
    let socketId = req.body.socketId
    let quizId = req.body.quizId
    console.log(quizId)
    const socketIo = app.get('socketIo')
    const socket = socketIo.sockets.connected[socketId]
    socket.join(quizId)
    console.log(socketIo.sockets.adapter.rooms);
}

export default quizController