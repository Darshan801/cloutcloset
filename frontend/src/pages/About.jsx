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
                <p>At Clout Closet, we believe fashion is more than just clothing — it's a statement. Born in the digital era, our brand is rooted in the streets, powered by culture, and driven by a passion for bold self-expression. Whether you're chasing trends or setting them, Clout Closet delivers the freshest styles that keep your wardrobe ahead of the curve.</p>
                <p>From statement streetwear to everyday essentials with an edge, we curate collections that speak to the confident, the creative, and the unapologetically authentic. Our goal is to empower individuals to own their look and elevate their clout — one outfit at a time.</p>
                <p>We’re not just a brand. We’re a movement. Welcome to the Closet — where style meets influence.</p>
            </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <p>Quality:</p>
              <p className='text-gray-600'>From stitching to fit, we’re committed to high standards that match your style and your lifestyle. Because when you wear Clout, you’re not just wearing fashion — you’re wearing confidence, comfort, and durability.</p>
          </div>
          <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <p>Convenience:</p>
              <p className='text-gray-600'>We offer secure payment options, simple returns, and real-time order tracking — all so you can focus on your style, not the stress. Because looking good should never be complicated.</p>
          </div>
          <div className='border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <p>Customer Service:</p>
              <p className='text-gray-600'>We're committed to fast responses, easy returns, and clear communication every step of the way. Got an issue? We’ll make it right — no stress, no hassle.</p>
          </div>
      </div>

      <NewsLatterBox/>

    </div>
  )
}

export default About
