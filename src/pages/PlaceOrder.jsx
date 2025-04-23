import React, { useContext } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const{navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 minlh-[80vh] border-t'>
      {/* --------------left side--------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'Delivery'} text2={'Information'}/>  
          </div>
      
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Full Name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address'/>
          <div className='flex gap-3'>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='city'/>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='street'/>
          </div>
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='phone'/>
      </div>

      {/* ----------------right side---------------- */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'HERE'}/>
          {/*------------ payment selection --------------*/}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
              {/* <img className='h-5 mx-4' src={assets.esewa_icon} alt="" /> */}
            </div>
          
            <div className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
              {/* <img className='h-5 mx-4' src={assets.khalti_logo} alt="" /> */}
            </div>

          </div>
        </div>
        <div className='w-full txt-end mt-8'>
          <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
