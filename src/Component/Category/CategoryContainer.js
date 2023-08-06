import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard';
import BarOfHomePage from '../utility/BarOfHomePage';

import { useSelector, useDispatch } from 'react-redux';
import { getAllCategoryPage } from '../../redux/actions/categoryAction';
import { Skeleton } from '@mui/material';

function Category() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getAllCategoryPage( 1 ) )
    }, [] )

    const category = useSelector( state => state.allCategory.category )
    const loading = useSelector( state => state.allCategory.loading )
    const arr = [ 1, 2, 3, 4, 5 ]
    return (
        <div className='container mt-20 bg-[#f2f1f6d1] py-10 rounded-3xl  shadow-md'>
            <BarOfHomePage title={ "Categoriesss" } btnTitle={ "More" } pathRoute={ "AllCategory" } />

            {/* <div className='grid items-baseline grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'> */ }
            <div className='grid items-stretch grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>

                { !loading && category && category.data ?
                    category && category.data ? (
                        category.data.slice( 0, 5 ).map( ( item ) => {
                            return (
                                <CategoryCard srcImg={ item.image } title={ item.name } id={ item._id } key={ item._id } />
                            )
                        } )
                    ) : null
                    : arr.map( () => {
                        return (
                            <div>
                                <Skeleton variant="rounded" height={ 160 } style={ { maxWidth: "220px" } } />
                                <Skeleton variant="text" height={ 50 } style={ { maxWidth: "220px", marginTop: "10px" } } />
                            </div>

                        )
                    } )

                    // <SkeltonCategory />
                    // <div><Spinner className="h-16 w-16 text-blue-500/10" /></div>

                }

            </div>
        </div >
    )
}

export default Category