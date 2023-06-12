import React from 'react'
import { FaRegHeart ,FaStar } from "react-icons/fa";
import ColorOfProduct from './ColorOfProduct';
import { Button,Chip } from '@material-tailwind/react';
import { FaShoppingCart } from "react-icons/fa";

function DetailsProduct() {
    const description = "this is field to write about product or Discraption"
    const Rating = "4.8"
    return (
        <div className='pr-2'>
            <div>
                <h1 className='text-md md:text-xl  font-bold mb-2'>Elcetronic:</h1>
                <span className='text-sm md:text-lg  font-sans text-blue-gray-800 mb-10'>{ description }</span>
                <span className='flex  items-center w-[100px] justify-between my-2'><div className='flex text-yellow-700 pr-1 text-sm md:text-lg items-baseline'><FaStar className='mr-1'/> {Rating} </div><div><FaRegHeart /></div></span>
            </div>
            <div className='my-2'>
                <span className='text-md md:text-xl  font-bold'>Bradn: </span><span className='text-sm md:text-lg  font-sans text-blue-gray-900'>Samsung</span>
            </div>
            <div className='flex'><span className='text-md md:text-xl  font-bold'>Colors: </span> <ColorOfProduct /></div>
            <div>
                <span className='text-md md:text-xl  font-bold mb-2'>Details:</span>
                <p className='text-sm md:text-lg  font-sans text-blue-gray-800 my-2'>A product description is the marketing copy that explains what a product is and why it's worth purchasing. The purpose of a product description is to supply customers with important information about
                    the features and key benefits of the product so they're compelled to buy</p>
            </div>
            <div className='flex'>
                <Button className='flex items-center'>Add to Cart <FaShoppingCart className='ml-1'/> </Button>
                <Chip  value="99 $" className='ml-2 flex items-center bg-gray-100 text-lg text-blue-gray-700'/>
            </div>
        </div>
    )
}

export default DetailsProduct