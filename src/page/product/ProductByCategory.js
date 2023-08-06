import React from 'react'
import { useParams } from 'react-router-dom'
import CardProductsContainer from '../../Component/Products/CardPrandsContainer';
import ViewAllProductsCategoryHook from '../../hook/products/view-all-products-category-hook';
import { Spinner } from '@material-tailwind/react';
import Pagination from '../../Component/utility/Pagination';
import BarOfHomePage from '../../Component/utility/BarOfHomePage';
import { Skeleton } from '@mui/material';

function ProductByCategory() {

    const { title, id } = useParams();
    const [ items, pagination, onPress, loading ] = ViewAllProductsCategoryHook( id )
    const arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ]

    if ( pagination )
        var pageCount = pagination
    else
        pageCount = 0

    return (
        <div className=''>
            <div className='md:col-start-3 col-start-4 col-end-13 '>
                {! loading ? items.length !== 0 ?
                    <CardProductsContainer titleOfBar={ title + "'s products" } prodcuts={ items } />
                    : <h1 className='text-md md:text-xl  font-bold mb-1  text-blue-gray-700 mt-20 text-center'>{ title + "'s products" } not available yet</h1>
                    :
                    <div className='container mt-20 shadow-md bg-[#f2f1f6d1] py-10 rounded-3xl  '>
                        <BarOfHomePage title={ title + "'s products" } btnTitle={ "More" } />
                        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                            { arr.map( () => {
                                return (

                                    <Skeleton variant="rounded" height={ 330 } className=' sm:w-[190px] md:w-[300px] lg:w-[220px] xl:w-[300px]' />

                                )
                            } ) }

                        </div>
                    </div>
                    // <Spinner className='w-[50px] h-[50px] m-20'/>
                }



            </div>
            { pageCount > 1 ? <Pagination pageCount={ pageCount } onPress={ onPress } /> : null }
        </div>
    )
}

export default ProductByCategory