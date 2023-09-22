import { Tooltip } from '@material-tailwind/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { URL } from '../../Api/baseUrlWithoutAxios'

function Brand( { srcImg, idBrand, name } ) {
    return (
        <Tooltip content={ `show ${name}'s products` } className="bg-mainGray border border-mainBlue">
            <div className='category m-4 flex justify-center items-center hover:bg-[#2196f314]  rounded-lg cursor-pointer'>
                <Link to={ `/products/brnad/${name}/${idBrand}` }>
                    <img src={ `${URL}/${srcImg}` } alt='' />
                </Link>
            </div>
        </Tooltip>
    )
}

export default Brand