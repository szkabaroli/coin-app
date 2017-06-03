import Express from 'express'
import userController from '../controllers/userController'
import authController from '../controllers/authController'
import quizController from '../controllers/quizController'

const router = Express.Router()

router.post('/signup', userController.post)
router.post('/auth', authController.post)
router.post('/quiz', quizController.post)

export default router