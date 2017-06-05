import db from '../../models'
export default (quizId) => {
    return new Promise((resolve, reject) => {
        db.Quiz.findOne({'quizid': quizId + ''}).then((quiz)=> {
            if(quiz) {
                resolve()
            } else {
                reject()
            }
        }) 
    })
}