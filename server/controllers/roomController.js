import db from '../models'
import http from 'http'
import io from 'socket.io'
import {app} from '../app'

const roomController = {}

const rooms = []

function validateRoom(room) {

}

roomController.post = (req, res) => {
    let data = req.body
    console.log(data);
    const socketIo = app.get('socketIo')
    console.log({t:data.socketId});
    const socket = socketIo.sockets.sockets[data.socketId]
    console.log(socket);
}

export default roomController