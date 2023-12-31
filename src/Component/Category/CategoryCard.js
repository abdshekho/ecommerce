import { Tooltip } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../../Api/baseUrlWithoutAxios'

function CategoryCard( { srcImg, title, id } ) {
    return (
        <Link to={ `/products/category/${title}/${id}` } >
            <Tooltip content={ `show ${title}'s products` } className="bg-mainGray border border-mainBlue">
                <div className='flex flex-col justify-between items-center h-full hover:bg-[#9d9e9f1c] rounded-lg cursor-pointer'>
                    <img src={ `${URL}/${srcImg}` }  alt={ title } loading='lazy' className='max-h-[168px] min-h-[100px]' height={ 260 } />
                    {/* <img src={ srcImg } alt=''  height={200} width={200}/> */ }
                    <h2 className='text-md md:text-xl text-center mt-4 text-blue-gray-600 '>{ title }</h2>
                </div>
            </Tooltip>
        </Link>
    )
}

export default CategoryCard