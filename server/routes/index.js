import Express from 'express'
import authenticate from '../middlewares/authenticate'
import userController from '../controllers/userController'
import authController from '../controllers/authController'
import quizController from '../controllers/quizController'

const router = Express.Router()

router.post('/signup', userController.post)
router.post('/auth', authController.post)
router.post('/quiz/validate', quizController.validate)
router.get('/projects', authenticate , quizController.get_projects)

export default router