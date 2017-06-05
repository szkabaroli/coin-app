import db from '../models'
import otherValidations from '../shared/validations/signup'
import isEmpty from 'lodash/isEmpty'
import bcrypt from 'bcrypt'

const userController = {}

function validateInput(data, otherValidation, user) {
    
    return new Promise((resolve, reject) => {
        let { errors } = otherValidation(data)
        user.validate().catch((err)=> {
            if (err.errors.username != undefined && err.errors.username.kind == 'unique') {
                errors.username = 'Username is taken'
            }
            if (err.errors.email != undefined && err.errors.email.kind == 'unique') {
                errors.email = 'Email is taken'
            }

        }).then(()=> {
            resolve({errors, isValid: isEmpty(errors)})
        })
        
    })
}

userController.post = (req, res) => {
    
    const { username, email, password } = req.body;
    const password_hash = bcrypt.hashSync(password, 10)

    const user = new db.User({
            username,
            email,
            password_hash
        })

    validateInput(req.body, otherValidations, user).then(({errors, isValid}) => {

        if(isValid) {

            user.save().then((newUser) => {
                res.status(200).json({
                    success: true,
                    data: newUser
                })
            })

        } else {

            res.status(400).json({
                errors: errors
            })

    }




    })
    

    
}

export default userController