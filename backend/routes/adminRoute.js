import express from 'express'
import { getAllUsers, deleteUser } from '../controllers/adminController.js'
import adminAuth from '../middleware/adminAuth.js'

const adminRouter = express.Router();

// User management routes
adminRouter.post('/users', adminAuth, getAllUsers)
adminRouter.post('/users/delete', adminAuth, deleteUser)

export default adminRouter 