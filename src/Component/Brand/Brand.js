import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Brand( { srcImg, idBrand, name } ) {
    return (
        <div className='category m-4 flex justify-center items-center bg-[#2196f314] hover:bg-[#9d9e9f1c] rounded-lg cursor-pointer'>
            <Link to={ `/products/brnad/${name}/${idBrand}` }>

                <img src={ srcImg } alt='' />
            </Link>
        </div>
    )
}

export default Brand