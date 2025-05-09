import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

// placing order using cod method

const placeOrder=async (req,res)=>{

    try {
        
        const { userId, items , amount , address}= req.body
        const orderData={
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        // save cart data in database
        await newOrder.save()

// to clear the cart data
        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success:true,message:"order placed"})



    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }


}


// all orders data for admin panel

const allOrders=async (req,res)=>{
    
    try {
        
        const orders = await orderModel.find({})
        res.json({success:true,orders})

    } catch (error) {
         console.log(error);
        res.json({success:false,message:error.message})
    }
}


// all orders data for frontend

const userOrders=async (req,res)=>{
    try {
        
        const {userId}=req.body

        const orders= await orderModel.find({ userId })
        res.json({success:true,orders})

    } catch (error) {
         console.log(error);
        res.json({success:false,message:error.message})
    }
}

// update order status from admin panel admin can update order status


const updateStatus=async (req,res)=>{
    try {
        
        const {orderId, status}=req.body
        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true,message:'status updated'})

    } catch (error) {
         console.log(error);
        res.json({success:false,message:error.message})
    }
}

export { placeOrder, allOrders , userOrders , updateStatus}