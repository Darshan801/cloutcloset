import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLatterBox from '../components/NewsLatterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
            <img className='w-full md:max-w-[450px]' src={assets.model2} alt="" />
            <div className='flex flex-col justify-center gap-6 md:w-2/4'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet numquam omnis voluptas veniam obcaecati dolorum, at beatae molestias.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempore ex deleniti vitae inventore reprehenderit enim ab saepe? Voluptatum ipsa dolores architecto cumque deserunt sed vitae consequatur aliquam, et incidunt vero dolorem minus eius. Ipsum dolorum, ullam dolorem, nisi nam quod hic itaque nesciunt, excepturi nihil quis perferendis autem iusto!</p>
                
            </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <p>Quality:</p>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint?</p>
          </div>
          <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <p>COnvenence:</p>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint?</p>
          </div>
          <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <p>Customer Service:</p>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, sint?</p>
          </div>
      </div>

      <NewsLatterBox/>

    </div>
  )
}

export default About
