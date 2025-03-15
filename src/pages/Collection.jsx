import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products }=useContext(ShopContext);
  const [showfilter,setshowfilter]=useState(false);
  const[FilterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
<<<<<<< HEAD
  const [subcategory,setSubCategory]=useState([]);


  //for categary
  const toggleCategory=(e)=>{
=======
  const [subcategary,setSubCategory]=useState([]);

  const toggleCategary=(e)=>{
>>>>>>> 555b1b9c59e4828476de91d078265de6d9a94efc
    if (category.includes(e.target.value)) {
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

<<<<<<< HEAD
  //for type or subcatogary

  const toggleSubCategory=(e)=>{
    if (subcategory.includes(e.target.value)) {
=======
  const toggleSubCategary=(e)=>{
    if (subcategary.includes(e.target.value)) {
>>>>>>> 555b1b9c59e4828476de91d078265de6d9a94efc
      setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }
<<<<<<< HEAD
  
  const applyFilter=()=>{
    let productCopy=products.slice();
    if (category.length>0) {
      productCopy=productCopy.filter(item=>category.includes(item.category));
    }
    if(subcategory.length>0){
      productCopy=productCopy.filter(item=>subcategory.includes(item.subcategory));
    }
    setFilterProducts(productCopy)
  }

  // useEffect(()=>{
  //     console.log(category);
  // },[category])
=======

  useEffect(()=>{
      console.log(subcategary);
  },[subcategary])
>>>>>>> 555b1b9c59e4828476de91d078265de6d9a94efc

  useEffect(()=>{
    setFilterProducts(products);
  },[])
<<<<<<< HEAD

  useEffect(()=>{
    applyFilter();
  },[category,subcategory])

=======
>>>>>>> 555b1b9c59e4828476de91d078265de6d9a94efc
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter options */}
      <div className='min-w-60'>
          <p onClick={()=>setshowfilter(!showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon1} alt="" className={`h-3 sm:hidden  ${showfilter ? 'rotate-90' : ''}`} />
          </p>
          {/* category filter */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' :'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
<<<<<<< HEAD
                    <input type="checkbox" onChange={toggleCategory} name="" id="" value={'Men'} className='w-3'/>Men
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleCategory} name="" id="" value={'Women'} className='w-3'/>Women
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleCategory} name="" id="" value={'Kids'} className='w-3'/>Kids
=======
                    <input type="checkbox" onChange={toggleCategary} name="" id="" value={'Men'} className='w-3'/>Men
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleCategary} name="" id="" value={'Women'} className='w-3'/>Women
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleCategary} name="" id="" value={'kids'} className='w-3'/>kids
>>>>>>> 555b1b9c59e4828476de91d078265de6d9a94efc
                </p>

              </div>
          </div>

        {/* subcategary filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' :'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
<<<<<<< HEAD
                    <input type="checkbox" onChange={toggleSubCategory} name="" id="" value={'T-shirts'} className='w-3'/>T-shirts
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleSubCategory} name="" id="" value={'Jeans'} className='w-3'/>Jeans
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleSubCategory} name="" id="" value={'Shoes'} className='w-3'/>Shoes
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleSubCategory} name="" id="" value={'Jackets'} className='w-3'/>Jackets
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleSubCategory} name="" id="" value={'Sweaters'} className='w-3'/>Sweaters
=======
                    <input type="checkbox" onChange={toggleSubCategary} name="" id="" value={'Topwear'} className='w-3'/>Topwear
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleSubCategary} name="" id="" value={'Bottomwear'} className='w-3'/>Bottomwear
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" onChange={toggleSubCategary} name="" id="" value={'Winterwear'} className='w-3'/>Winterwear
>>>>>>> 555b1b9c59e4828476de91d078265de6d9a94efc
                </p>

              </div>
          </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/* product sort */}
            <select className='border-1 border-gray-300 text-sm px-2'>
              <option value="relevent">Sort by: Relevent</option>
              <option value="low-high">SOrt by: Low to high</option>
              <option value="high-low">Sort by: High to low</option>
            </select>
        </div>

        {/* Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 mg:grid-cols-4 gap-4 gap-y-6'>
            {
              FilterProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
              ))
            }
        </div>
      </div>

    </div>
  )
}

export default Collection
