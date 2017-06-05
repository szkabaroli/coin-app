import validateQuiz from '../shared/validations/quiz'
export default (socket, io) => {
    socket.on('joinQuiz', (quizId) => {
        validateQuiz(quizId).then(() => {
            socket.emit('join_success', true)
            console.log('valid');
        }).catch(() => {
            socket.emit('join_success', false)
            console.log('notvalid');
        })
    }) 
}