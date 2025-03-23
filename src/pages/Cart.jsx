import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';


const Cart = () => {

  const{ products , currency , cartItems ,updateQuantity}= useContext(ShopContext);
  const [cartData,setCartData]=useState([]);

  useEffect(()=>{
    const tempData=[];
    // itterate through products
    for (const items in cartItems){
      //iterate through though items in products
      for(const item in cartItems[items]){
        
          if (cartItems[items][item]>0) {
            tempData.push({
              _id: items,
              size:item,
              quantity:cartItems[items][item] 
            })
          }
      }
    }
    setCartData(tempData);

  },[cartItems])


  return (
    <div className='border-t pt-14'>
      
      <div className='text-2xl mb-3'>
          <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
         cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className='py-4 border text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              {/* You can use productData here to display the product information */}
              <div className='flex items-start gap-6'>
                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                <div>
                <p className='font-medium text-xs sm:text-lg'>{productData.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                <p>{currency}{productData.price}</p>
                <Title text1={'Size'} text2={''}/>
                <p className='bg-gray-100 border px-2 py-1 rounded-sm'>{item.size}</p>
                </div>
              </div>
          
              </div>
              <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null:updateQuantity(item._id,item.size,Number(e.target.value))} className='border-1 max-w-10 sm:max-w-20 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
              <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />

            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default Cart
