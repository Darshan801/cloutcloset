import React from 'react'

const NewsLatterBox = () => {

    const OnSubmitHandler = (event) =>{
        event.preventDefault();
    }


  return (
    <div className='text-center mt-10'>
      <p className='font-medium text-gray-800 text-2xl'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Be a member for frequent discount.</p>
      <form onSubmit={OnSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-1 pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' name="" id=""  required/>
        <button className='bg-black text-white text-xs px-10 py-4' type="submit">SUBSCRIBE</button>

      </form>
    </div>
  )
}

export default NewsLatterBox
