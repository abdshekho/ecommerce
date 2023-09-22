import React from 'react'
import { useLocation } from 'react-router-dom'
function NotFoundPage() {
    const location = useLocation();
    console.log( location )
    return (
        <div className='flex justify-center mt-20'>

            <h1 className='text-xl md:text-2xl bg-mainGray text-white p-2' style={ { boxShadow: "0px 6px 0px 0px #2196f3" } }>
                Can't find this route:<span className='ml-10 bg-[#2196f3] p-1'>{ location.pathname }</span>
            </h1>

        </div>
    )
}

export default NotFoundPage