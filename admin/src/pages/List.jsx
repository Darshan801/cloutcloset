import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list,setList]=useState([])

  // -----------listing products -------------
  const fetchList = async () => {
    try {
      
      const response=await axios.get(backendUrl + '/api/product/list') // getting api response

      if(response.data.success){
      setList(response.data.products)
      }
      else{
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  //--------------- removing products --------------------

  const removeProduct= async (id) => {
      try {
        
        const response = await axios.post(backendUrl + '/api/product/remove',{id} ,{headers:{token}})

        if(response.data.success){
          toast.success(response.data.message)
          await fetchList();
        } else{
          toast.error(response.data.message)
        }

      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <>
      <p className='mb-2'>Products List</p>
      <div className='flex flex-col gap-2'>
        {/*-------------- list table title----------- */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-2 px-3 border border-pink-200 bg-gray-200 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/*---------------- product List -----------------*/}

        {
          list.map( (item,index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 px-2 border border-gray-200 text-sm'>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default List
