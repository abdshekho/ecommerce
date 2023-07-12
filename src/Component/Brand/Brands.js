import React, { useEffect } from 'react';
import Brand from './Brand';
import BarOfHomePage from '../utility/BarOfHomePage';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBrand } from '../../redux/actions/brandAction';
import Spinner from '../utility/Spinner';
import { useParams } from 'react-router-dom';

// import two from "../../images/brand2.png"
// import three from "../../images/brand3.png"
function Brands() {
    
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( getAllBrand() )
    }, [] )
    //get last brand state from redux
    const brand = useSelector( state => state.allBrand.brand )
    //get last loading state from redux
    const loading = useSelector( state => state.allBrand.loading )
    return (

        <div className='container mt-20 bg-[#f2f1f6d1] py-10 rounded-3xl  shadow-md'>

            <BarOfHomePage title={ "Brands" } btnTitle={ "More" } pathRoute={ "AllBrand" } />
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
                { loading === false ?
                    brand && brand.data ? (
                        brand.data.slice( 0, 5 ).map( ( item ) => {
                            return <Brand srcImg={ item.image } key={ item._id } idBrand={ item._id } name={ item.name } />
                        } )
                    ) : <h1 className='text-xl text-gray-600'>No Brands Yet</h1>
                    : <div><Spinner /></div>

                }
                {/* <Brand srce={ one } /> */ }

            </div>
        </div>
    )
}

export default Brands