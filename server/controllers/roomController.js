import db from '../models'
import http from 'http'
import socketIO from 'socket.io'

const roomController = {}

const rooms = []

function validateRoom(room) {

}

roomController.get = (req, res, server) => {
    const room = req.body.room
    var socket = req.app.get('socketIo');
    socket.emit('room')
}

export default roomController