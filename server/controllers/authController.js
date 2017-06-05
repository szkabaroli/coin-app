import db from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../config'

const authController = {}

authController.post = (req, res) => {
    const { identifier, password } = req.body

    db.User.findOne({$or:[ {'username': identifier}, {'email': identifier}]}).then(user => {
        if(user) {
            if(bcrypt.compareSync(password, user.password_hash)) {
                
                const token = jwt.sign({
                    id: user._id,
                    username: user.username
                }, config.jwtSecret)

                res.json({ success:true, token: token })
                
            } else {
                res.status(401).json({ errors: {  form: 'Invalid creditentals!'} })
            }

        } else {
            res.status(401).json({ errors: {  form: 'Invalid creditentals!'} })
        }
    })
}

export default authController