import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [curretstate,setCurrentState]=useState('Login');
  const{token,setToken,navigate,backendUrl}=useContext(ShopContext)

  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const onSubmitHandler= async (event) => {
    event.preventDefault();
    try {
      if (curretstate === 'Signup') {
        //--------------------registration api
        const response= await axios.post('http://localhost:4000/api/user/register',{name,email,password})
        // console.log(response.data)
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        } else {
          toast.error(response.data.message)
        }

      } else {
//-------------------login api
          const response= await axios.post('http://localhost:4000/api/user/login',{email,password})
          // console.log(response.data)
          if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
          } else {
            toast.error(response.data.message)
          }

      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{curretstate}</p>
          <hr className='w-8 bg-gray-800'/>
        </div>


        {curretstate == 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>

        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'>Forget password?</p>
          {
            curretstate == 'Login'
            ? <p onClick={()=>setCurrentState('Signup')} className='cursor-pointer'>Create account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login</p>
          }
        </div>
        <button className='bg-black text-white font-light cursor-pointer px-8 py-2 mt-4'>{curretstate == 'Login' ? 'Sign In ' : 'Sign Up'}</button>



    </form>
  )
}

export default Login
