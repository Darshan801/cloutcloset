import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const[method,setMethod]=useState('cod')
  const{navigate,token, cartItems, getCartItems,  setCartItems,  getCartAmount, delivery_fee, products}=useContext(ShopContext)
  const [formData,setFormData]=useState({
    fullName:'',
    email:'',
    street:'',
    city:'',
    phone:''

  })

  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value

    setFormData(data =>({...data,[name]:value}))
  }
  
  const onSubmitHandler = async (event)=>{
    event.preventDefault()
    try {
      
      let orderItems = []
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if (cartItems[items][item]>0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size=item
              itemInfo.quantity=cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      // console.log(orderItems)
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }


      //choose payment method
      switch(method){
        // api call for cod
        case 'cod':
          const response = await axios.post('http://localhost:4000/api/order/place',orderData,{headers:{token}})
          // console.log(response.data);
          
          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else{
            toast.error(response.data.message)
          }
        break;

        case 'stripe':
          const responseStripe= await axios.post('http://localhost:4000/api/order/stripe',orderData,{headers:{token}})
          if (responseStripe.data.success) {
            const{session_url}=responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }


        break;

        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
      
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 minlh-[80vh] border-t'>
      {/* --------------left side--------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'Delivery'} text2={'Information'}/>  
          </div>
      
          <input required onChange={onChangeHandler} name='fullName' value={formData.fullName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Full Name' />
          <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
          <div className='flex gap-3'>
              <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='city' />
              <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='street'/>
          </div>
              <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='phone' />
      </div>

      {/* ----------------right side---------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>


        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'HERE'}/>
          {/* ------------ payment selection -------------- */}
          <div className='flex gap-3 flex-col lg:flex-row'>

            <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 cursor-pointer mt-3'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
  
            </div>
             <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 cursor-pointer mt-3'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>Stripe</p>
              {/* <img className='h-5 mx-4' src={assets.stripe_logo} alt="" /> */}
  
            </div>
          
            {/* <div className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
               <img className='h-5 mx-4' src={assets.khalti_logo} alt="" /> 
            </div> */}

          </div>
        </div>
        
        <div className='w-full txt-end mt-8'>
          <button type='submit' className='bg-black text-white px-16 py-3 text-sm cursor-pointer'>PLACE ORDER</button>
        </div>
      </div>
      
    </form>
  )
}

export default PlaceOrder
