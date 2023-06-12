import React from 'react'
import { FaRegHeart ,FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
function ProductCard({image,description,price,Rating}) {
    return (
        <div className='bg-white  pl-2  md:p-3 rounded-lg shadow-lg overflow-hidden '>
            <Link to="/products/:id" >
            <img src={image} alt='' className=' min-h-[150px] min-w-full md:min-h-[250px] m-auto'/>
            </Link>
            <FaRegHeart className='mb-2'/>
            <span className='text-sm md:text-lg  font-sans'>{description}</span>
            <div className='flex justify-between mt-2 md:mt-4'>
                <div>
                <span className='font-[800] text-sm md:text-lg'>{price} </span>$
                </div>
                <div className='flex text-yellow-700 pr-1 text-sm md:text-lg items-center'>{Rating} <FaStar className='ml-1 '/></div>
            </div>
        </div>
    )
}

export default ProductCard