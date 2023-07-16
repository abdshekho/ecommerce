import React from 'react'
import { FaGlobeAmericas, FaRegClock } from "react-icons/fa"

import { Link } from 'react-router-dom'
function AdminOrderItem( { id, idOrder, createdAt, isDelivered, userName, userEmail, isPaid, paymentMethodType, price } ) {
    return (

        <Link to={ `/admin/order/${id}` }>

            <div className='container bg-white hover:bg-[#c3daef70] flex flex-col rounded-lg py-2 my-4'>

                <div className=' flex flex-wrap justify-between gap-2 py-4'>
                    <span className='text-sm md:text-md   mb-1'>order Number : <span className='text-blue-gray-600 font-bold'>#{ idOrder }</span></span>
                    <span className='text-sm md:text-md   mb-1'>user name: <span className='text-blue-gray-600 font-bold'>{ userName && userName.name ? userName.name : "" }</span></span>
                    <span className='text-sm md:text-md   mb-1'>Email:  <span className='text-blue-gray-600 font-bold'>{ userEmail && userEmail.email ? userEmail.email : "" }</span></span>
                    <span className='text-sm md:text-md   mb-1'><span className='text-blue-gray-600 flex items-center gap-1'><FaGlobeAmericas /> { createdAt.slice( 0, 10 ) }</span></span>
                    <span className='text-sm md:text-md   mb-1'><span className='text-blue-gray-600 flex items-center gap-1'><FaRegClock /> { createdAt.slice( 11, 16 ) }</span></span>
                    {/* <span className='flex text-sm md:text-lg  font-sans text-blue-gray-800 mb-4'><h1 className='text-md md:text-xl   mr-1'>user name: </h1> { userName }</span>
                    <span className='flex'><h1 className='text-md md:text-xl   mr-1'>Email: </h1> <span className=' text-blue-gray-600'>{ userEmail }</span></span>

                    <span className=' text-sm md:text-lg text-right sm:text-left'>{ createdAt.slice( 0, 10 ) } </span> */}
                </div>
                <div className='flex flex-wrap justify-between gap-2 py-4  border-t-2'>
                    <span className='text-sm md:text-md  '>Delivery State: <span className='text-blue-gray-600 font-bold'>{ isDelivered ? "Order complete" : "Underway" }</span> </span>
                    <span className='text-sm md:text-md  '>Payment method: <span className='text-blue-gray-600 font-bold'>{ paymentMethodType }</span> </span>
                    <span className='text-sm md:text-md  '>state: <span className='text-blue-gray-600 font-bold'>{ isPaid ? "done" : "not done" }</span> </span>
                    <span className='font-bold text-sm md:text-lg text-right sm:text-left'>{ price } $</span>
                </div>
                <div className=' flex  justify-around '>
                    {/* <button className='flex text-blue-gray-600'><FaTrashAlt className='' />Delete</button> */ }
                </div>

            </div>
        </Link>
    )
}

export default AdminOrderItem