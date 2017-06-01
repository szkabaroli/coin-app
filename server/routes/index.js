import Express from 'express'
import userController from '../controllers/userController'
import authController from '../controllers/authController'
import roomController from '../controllers/roomController'

const router = Express.Router()

router.post('/signup', userController.post)
router.post('/auth', authController.post)
router.post('/room', roomController.post)

export default router