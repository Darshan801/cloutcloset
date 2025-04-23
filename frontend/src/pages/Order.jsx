import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Order = () => {
  const {products,currency}=useContext(ShopContext);
  return (
    <div className='border-t pt-16'>
      
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

              <div className='text-sm flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={item.image[0]} alt="" />

                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
                  </div>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                      <p className='text-lg'>{currency}{item.price}</p>
                      <p>Quantity: 1</p>
                      <p>Size: M</p>
                  </div>
                  {/* <div className='md:w-1/2 flex justify-between0'>
                      <div className='flex items-center gap-2'>

                      </div>
                  </div> */}
                  

              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Order
