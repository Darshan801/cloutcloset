import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Order = () => {
  const {currency,token}=useContext(ShopContext);
  const [orderData,setOrderData]=useState([])

  const loadOrderData = async()=>{
    try {
      
      if (!token) {
        return null
      }

       const response = await axios.post('http://localhost:4000/api/order/userorders',{},{headers:{token}})
      //  console.log(response.data);
      if (response.data.success) {
        let allOdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date

            allOdersItem.push(item)//saving item in allorderitem array
          })
        })
        // console.log(allOdersItem)
        setOrderData(allOdersItem.reverse())// reverse to display latest order on top
      }
       

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])



  return (
    <div className='border-t pt-16'>
      
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {
          orderData.map((item,index)=>(
            <div key={index} className='py-4 border-t border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

              <div className='text-sm flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={item.image[0]} alt="" />

                  <div>
                    <p className='sm:text-base font-medium'>{item.name}</p>
              
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                      <p>{currency}{item.price}</p>
                      <p>Quantity:{item.quantity}</p>
                      <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                   <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>

                    
                    </div>
              </div>

                  <div className='md:w-1/2 flex justify-between'>
                      <div className='flex items-center gap-2'>
                            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                            <p className='text-sm md:text-base cursor-default'>{item.status}</p>
                      </div>
                      <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm cursor-pointer hover:bg-gray-100'>Track order</button>
                  </div>
                 

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Order
