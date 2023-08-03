import React from 'react'
// import { FaTrashAlt } from "react-icons/fa"
import { Chip, Tooltip } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { URL } from '../../Api/baseUrlWithoutAxios'
import ColorOfProduct from '../Products/ColorOfProduct'
function UserOrderItem( { title, idProduct, imageCover, count, price, colorProduct } ) {

    const imagePath = `${URL}products/${imageCover}` || "Product Delted"
    return (
        <div className='containerflex flex-col sm:grid  grid-cols-12 py-2 border-b-[1px] border-gray-400'>
            <div className='col-span-5 md:col-span-3 mr-4'>
                <Link to={ `/products/${idProduct}` }>
                    <Tooltip content={ `More details about ${title}` } className="bg-[#474751]">
                        <img src={ imagePath } alt='' className='w-full '></img>
                    </Tooltip>
                </Link>
            </div>
            <div className='col-span-7 flex flex-col py-4 gap-2'>
                <span className='text-sm md:text-lg  font-sans text-blue-gray-800 mb-4'>{ title }</span>
                <span className='flex items-center'><h1 className='text-md md:text-lg  font-bold mr-1'>Price: </h1>
                    <Chip value={ price + " $" } className='ml-2 flex items-center bg-gray-100 text-lg text-blue-gray-700' />
                </span>

                <span className='flex items-center'><h1 className='text-md md:text-lg  font-bold mr-1'>Color: </h1>
                    <ColorOfProduct color={ colorProduct || "#ffffff" } />
                </span>

                {/* <span className='my-2'> <ColorOfProduct /></span> */ }
                <div className='flex'>
                    <span className='my-3 text-md md:text-lg  font-bold mr-1'>Quantity</span>
                    <Chip value={ count } className='ml-2 flex items-center bg-gray-100 text-lg text-blue-gray-700' />
                </div>
                <span></span>
            </div>

        </div>
    )
}

export default UserOrderItem