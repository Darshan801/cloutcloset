import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const Latestcollection = () => {
    const { products, currency, delivery_fee } = useContext(ShopContext);
    const [latestProducts,setLatestProduct]=useState([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[products])
    
  return (
    <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
           Whether you're building your rotation or leveling up your everyday fit, this collection brings the heat. Limited pieces. High impact. 100% clout.
            </p>
            
        </div>
      

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }

      </div>

    </div>
  )
}

export default Latestcollection
