import React from 'react';
import { Link } from 'react-router-dom';


function BarOfHomePage( { title, btnTitle, pathRoute } ) {
    return (
        <div className='flex justify-between mb-10 '>
            <h1 className='text-xl md:text-2xl bg-mainGray text-white p-2' style={ { boxShadow: "6px 6px 0px 0px #2196f3" } }>{ title }</h1>
            <Link to={ `/${pathRoute}` }>
                {
                    title === "All category" ? "" : <button className={ `bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded
                    ${!btnTitle ? "hidden" : "flex"}` }>{ btnTitle }</button>
                }

            </Link>
        </div>
    )
}

export default BarOfHomePage