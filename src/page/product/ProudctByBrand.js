import React from 'react'
import { useParams } from 'react-router-dom'
import CardProductsContainer from '../../Component/Products/CardPrandsContainer';
import { Spinner } from '@material-tailwind/react';
import Pagination from '../../Component/utility/Pagination';
import ViewAllProductsBarndHook from '../../hook/products/view-all-products-brand-hook';

function ProudctByBrand() {

    const { name, id } = useParams();

    const [ items, pagination, onPress, loading ] = ViewAllProductsBarndHook( id )
    if ( pagination )
        var pageCount = pagination
    else
        pageCount = 0

    return (
        <div className=''>
            { !loading ? items.length !== 0 ?
                <CardProductsContainer titleOfBar={ name + "'s products" } prodcuts={ items } />
                : <h1 className='text-md md:text-xl  font-bold mb-1  text-blue-gray-700 mt-20 text-center'>{ name + "'s products" } not available yet</h1>
                : <Spinner className='w-[50px] h-[50px] m-20' />
            }
            <div className='md:col-start-3 col-start-4 col-end-13 '>
            </div>
            { pageCount > 1 ? <Pagination pageCount={ pageCount } onPress={ onPress } /> : null }
        </div>
    )
}

export default ProudctByBrand