import mongoose from 'mongoose'
import mongooseValidator from 'mongoose-unique-validator'

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: [true, 'Username is alredi taken']
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password_hash: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

UserSchema.plugin(mongooseValidator);

export default mongoose.model('User', UserSchema)