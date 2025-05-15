import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

import { useEffect } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useSearchParams } from 'react-router'

const Verify = () => {

    const {navigate,token,setCartItems}=useContext(ShopContext)
   const[searchParams,setSearchParams]=useSearchParams()

   const success = searchParams.get('success')
   const orderId = searchParams.get('orderId')

    const verifyPayment=async () => {
        try {
            if(!token){
                return null
                
            }
            const response = await axios.post('http://localhost:4000/api/order/verifyStripe',{success,orderId},{headers:{token}})
            if (response.data.success) {
                setCartItems({})
                navigate('/orders')
<<<<<<< HEAD
                toast.success("Payment Successfull")
=======
                toast.success("Payment successfull!")
>>>>>>> bd225cee23055cbb18fa6ad16b294b7170b8e623
            } else {
                navigate('/cart')
                // toast.success("Payment failed!")
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
            
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[token])

  return (
    <div>
      
    </div>
  )
}

export default Verify
