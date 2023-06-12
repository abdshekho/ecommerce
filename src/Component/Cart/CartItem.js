import React from 'react'
import { FaTrashAlt } from "react-icons/fa"
import one from "../../images/mobile1.png"
import ColorOfProduct from '../Products/ColorOfProduct'


function CartItem( { Category, Descriptoin, Brand, price } ) {
    return (
        <div className='container bg-white flex flex-col sm:grid  grid-cols-12 py-2 my-4'>
            <div className='col-span-3'>
                <img src={ one } alt='' className='w-full'></img>
            </div>
            <div className='col-span-7 flex flex-col py-10'>
                <span className='text-md md:text-xl  font-bold mb-1'>{ Category }</span>
                <span className='text-sm md:text-lg  font-sans text-blue-gray-800 mb-4'>{ Descriptoin }</span>
                <span className='flex'><h1 className='text-md md:text-xl  font-bold mr-1'>Brand: </h1> <span className='font-bold text-blue-gray-600'>{ Brand }</span></span>
                <span className='my-2'> <ColorOfProduct /></span>
                <div className=''>
                    <span className='mr-2'>Quantity</span><input type='number' placeholder='Qu bg' className=' w-20 h-8 border border-black p-2' />
                </div>
            </div>
            <div className='col-span-2 flex flex-col justify-around  md:items-end'>
                <button className='flex text-blue-gray-600'><FaTrashAlt className='' />Delete</button>
                <span className='font-[800] text-sm md:text-lg text-right sm:text-left'>{ price } $</span>
            </div>

        </div>
    )
}

export default CartItem