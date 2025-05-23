import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.tyler} alt="" />
        <div className='flex flex-col justify-center items-center gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>37400 Lamachour 19, Pokhara <br />Kaski, Nepal</p>
            <p className='text-gray-500'>Tel: (355) 555-1234 <br /> Email: clout@closet.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers at closet</p>
            <p className='text-gray-500'>A fashion Haven</p>
            <button className='border-black rounded-sm px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>MORE</button>
        </div>
      </div>
      <NewsLatterBox/>
    </div>
  )
}

export default Contact
