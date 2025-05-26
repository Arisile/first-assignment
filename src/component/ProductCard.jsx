import React, { useEffect, useState } from 'react'
import productImage from '../assets/headphones.png'
import Button from './Button'
import axios from 'axios';
const ProductCard = () => {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
     const fetchPost=async () =>{
        try {
          const responce =await axios.get("https://dummyjson.com/products")
          setProduct(responce.data.products)
        
        
        } catch (error) {
          console.log("error",error);
        }
     };
     fetchPost()
  },[]);
  // fetch("https://dummyjson.com/products")
  // .then((respones)=>respones.json() )
  // .then((data) => setProduct(data.products))
  // .catch(error => console.log("error",error))


  return (
    <>
     {product.map((p, index)=>(
        <div
         key={index} 
         className='bg-white w-[300px] h-fit ml-10  rounded-xl shadow-lg'>
        <div className='w-full relative p-12'>
            <div className='bg-purple-500 text-black w-fit px-2 py-1 absolute top-0 left-1 '>
                Nearest Seller
            </div>
            <img className="size-[200px] m-auto" src={p.images} alt="image" />
        </div>
        <div className='flex flex-col px-2'>
            <h3 className='text-2xl font-bold pt-7 mb-3'>{p.title}</h3>
           <div className='flex flex-col pt-5'>
           <small className='text-sm text-gray-500'>Shipped in 3-4days</small>
           <bold className="font-bold">${p.price}</bold>
           </div>
    
        </div>
        <div className='flex space-x-5 gap-2 px-3'>
            <Button label="Add to Cart" className="text-gray-400 rounded-md cursor-pointer"/>
            <Button label="Buy Now" className="bg-purple-600 rounded-md cursor-pointer"/>
        </div>
    </div>
     ))}
</>
  )
}

export default ProductCard