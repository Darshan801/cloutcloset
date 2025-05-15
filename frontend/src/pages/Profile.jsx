import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import { toast } from 'react-toastify'

const Profile = () => {
  const { token, navigate } = useContext(ShopContext)
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/user/profile', {}, { headers: { token } })
        if (response.data.success) {
          setUserData(response.data.user)
        } else {
          toast.error(response.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

    fetchUserData()
  }, [token, navigate])

  if (!userData) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'PROFILE'} />
      </div>

      <div className='mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 underline mt-4'>Name</label>
            <p className='text-lg text-gray-900'>{userData.name}</p>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 underline'>Email</label>
            <p className='mt-1 text-lg text-gray-900'>{userData.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile 