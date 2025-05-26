import React, { Suspense } from 'react'
import productImage from '../assets/headphones.png'
import Button from '../component/Button'
import Loading from '../component/Loading';
// import ProductCard from '../component/ProductCard'
const ProductCard = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../component/ProductCard"));
      }, );
    })
);
const Product = () => {
  return (
    <section className="h-full bg-gradient-to-r from-green-500 via-blue-300 to-red-500 flex flex-wrap gap-4">
      <Suspense  fallback={<Loading />}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </Suspense>
        
        
    </section>
  )
}

export default Product