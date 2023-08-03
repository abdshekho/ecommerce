import React, { useEffect } from 'react'
import CategoryCard from './CategoryCard';
import BarOfHomePage from '../utility/BarOfHomePage';

import { useSelector, useDispatch } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { Spinner } from '@material-tailwind/react';

function Category() {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getAllCategory() )
    }, [] )

    const category = useSelector( state => state.allCategory.category )
    const loading = useSelector( state => state.allCategory.loading )


    return (
        <div className='container mt-20 bg-[#f2f1f6d1] py-10 rounded-3xl  shadow-md'>
            <BarOfHomePage title={ "Categoriesss" } btnTitle={ "More" } pathRoute={ "AllCategory" } />

            {/* <div className='grid items-baseline grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'> */ }
            <div className='grid items-stretch grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>

                { loading === false ?
                    category && category.data ? (
                        category.data.slice( 0, 5 ).map( ( item ) => {
                            return <CategoryCard srcImg={ item.image } title={ item.name } id={ item._id } key={ item._id } />
                        } )
                    ) : null
                    : <div><Spinner className="h-16 w-16 text-blue-500/10" /></div>

                }
                
            </div>
        </div >
    )
}

export default Category