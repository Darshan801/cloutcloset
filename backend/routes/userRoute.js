import express from 'express'
import { loginUser, registerUser, adminLogin, getUserProfile, getAllUsers } from '../controllers/userController.js'
import authUser from '../middleware/auth.js'
import adminAuth from '../middleware/adminAuth.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminLogin)
userRouter.post('/profile', authUser, getUserProfile)
userRouter.post('/admin/users', adminAuth, getAllUsers)

export default userRouter;