import React from 'react'
import { Link } from 'react-router-dom'

function CategoryCard( { srcImg, title, id } ) {
    return (
        <Link to={ `/products/category/${title}/${id}` } >
            <div className='flex flex-col justify-between items-center hover:bg-[#9d9e9f1c] rounded-lg cursor-pointer'>
                <img src={ srcImg } alt='' className='max-h-[168px]' />
                <h2 className='text-md md:text-xl text-center mt-4 text-blue-gray-600 '>{ title }</h2>
            </div>
        </Link>
    )
}

export default CategoryCard