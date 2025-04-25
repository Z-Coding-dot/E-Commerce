import React from 'react'
import { Link } from 'react-router-dom' 

const ProductCard = ({pro}) => {
  return (
    <Link to={`/product/${pro.id}`}>
      <div
        className=" bg-white shadow-md rounded-md cursor-pointer py-10 hover:bg-gray-100 
    hover:shadow-lg hover:shadow-gray-400 hover:scale-105 duration-300 hover:ease-in-out"
      >
        <img
          src={pro.image}
          alt="product image"
          className="w-full h-48 object-contain rounded-t-md "
        />
        <div className=" bg-gray-50 p-4">
          <h2 className="text-lg my-4 font-semibold">
            {pro.title.substring(0, 20) + "..."}
          </h2>
          <p className="text-gray-500 text-sm">
            {pro.description.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between items-center mt-5">
            <p className="font-semibold text-md">
              Price: ${pro.price}
            </p>
            <p className="text-gray-500 text-sm">View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard
