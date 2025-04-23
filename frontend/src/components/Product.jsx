import React from 'react'
import { assets } from '../assets/assets'

const Product = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 sm:text-sm mad:text-base text-gray-500'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Exchange Policy</p>
            <p className='text-gray-400'>We offer free exchange policy</p>
        </div>
    </div>
  )
}

export default Product
