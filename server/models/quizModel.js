import mongoose from 'mongoose'
import mongooseValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    userid: {
        type: String,
        required: true
    },
    quizid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    questions: [{
        question: {
            type: String,
            required: true
        },
        answer: {
            type: Boolean,
            required: true
        }
    }]
})

QuizSchema.plugin(mongooseValidator);

export default mongoose.model('Quiz', QuizSchema)