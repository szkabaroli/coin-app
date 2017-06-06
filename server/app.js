import Express from 'express'
import http from 'http'
import routes from './routes'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import bluebird from 'bluebird'
import compression from 'compression'
import socketIo from 'socket.io'
import ioHandler from './sockets/socket'
mongoose.Promise = bluebird

const db = 'mongodb://szkabaroli:liroliro99@ds151631.mlab.com:51631/coinapp'

mongoose.connect(db, ()=> {
     console.log('Connect to MongoDB is successfull!');
})

export const app = Express()
const server = http.createServer(app)
const io = socketIo.listen(server)

ioHandler(io)


app.set('socketIo', socketIo);
app.use(compression())
app.use(bodyParser.json())
app.use('/api', routes)
app.use(Express.static(__dirname + '/'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

server.listen(3000, () => { console.log('App listen on port 3000!') })