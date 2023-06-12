import React from 'react';
import { Link } from 'react-router-dom';


function BarOfHomePage( { title, btnTitle, pathRoute } ) {
    return (
        <div className='flex justify-between mb-10 '>
            <h1 className='text-2xl md:text-3xl  font-bold text-gray-900' style={ { letterSpacing: "2px" } }>{title}</h1>
            <Link to={`/${pathRoute}`}>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>{btnTitle}</button>
            </Link>
        </div>
    )
}

export default BarOfHomePage