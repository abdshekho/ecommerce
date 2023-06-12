import React from 'react'
import { FaStar } from "react-icons/fa";


function Comment() {
    const comment = "Product is very good, fit is good. After trying many products of different brands, this one is the best!! All of you can go ahead and buy without any doubt "
    return (
        <div className='py-4'>
            <div className='flex items-center border-t-[1px] border-gray-400 pt-2 '>
                <span className='text-md md:text-xl text-blue-900'>Random user</span>
                <span className='flex text-yellow-700 pr-1 text-sm md:text-md ml-2'> <FaStar className='pt-1' /> 4.3</span>
            </div>
            <span className='text-gray-800 text-sm md:text-lg'>{ comment }</span>
        </div>
    )
}

export default Comment