import express from 'express'
import { allOrders, updateStatus, placeOrder, userOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/auth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()


//admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//paymemt feature(token should be provided in header)
orderRouter.post('/place',authUser,placeOrder)

// user feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter