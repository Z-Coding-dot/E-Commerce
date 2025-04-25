import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const ProductGrid = () => {

  const products = useSelector((state) => state.products.filterItems);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-26 mb-36 mx-10'>
     {products.map((pro) => (
         <ProductCard pro={pro} key={pro.id}/>
     ))}
    </div>
  )
}

export default ProductGrid
