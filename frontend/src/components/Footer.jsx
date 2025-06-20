import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-20 mt-20 text-sm'>
            <div>
                {/* <img src={assets.logo} className='mb-5 w-32' alt="" /> */}
                <h1 className='mb-5 w-32 text-xl font-semibold'>CloutCloset</h1>
                <p className='w-full md:w-2/3 text-gray-600'>We’re not just a brand. We’re a movement. Welcome to the Closet — where style meets influence.</p>
            </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap1 text-gray-600'>
                <li>+97798123456</li>
                <li>CloutCloset@gmail.com</li>
            </ul>
        </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ cloutcloset.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
