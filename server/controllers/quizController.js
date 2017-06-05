import db from '../models'
import io from 'socket.io'
import validateQuiz from '../shared/validations/quiz'

const quizController = {}


quizController.validate = (req, res) => {
    let quizId = req.body.quizId
    
    validateQuiz(quizId).then(() => {
        res.status(200).json({ success: true })
    }).catch(() => {
        res.status(404).json({ errors: {  form: 'Cannot find quiz with this Id!'} })
    })

}

quizController.get_projects = (req, res) => {
    db.Quiz.find({'userid': req.query.userid}).then((projects)=> {
        res.status(200).json(projects)
        console.log(projects);
    }).catch(()=> {
        res.status(500).send()
    })
}


export default quizController