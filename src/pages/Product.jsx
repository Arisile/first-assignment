import React from 'react'
import productImage from '../assets/headphones.png'
import Button from '../component/Button'
import ProductCard from '../component/ProductCard'
const Product = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-green-500 via-blue-300 to-red-500 flex flex-wrap gap-4">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>  
        
    </section>
  )
}

export default Product