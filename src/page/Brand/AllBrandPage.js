import React from 'react'
import Brand from '../../Component/Brand/Brand';
import Pagination from '../../Component/utility/Pagination';
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllBrand, getAllBrandPage } from '../../redux/actions/brandAction';
import Spinner from '../../Component/utility/Spinner';

function AllBrand() {
    const dispatch = useDispatch();

    useEffect( () => {
        function one() {

            dispatch( getAllBrand( 5 ) )
        }
        one()
    }, [ dispatch ] )

    const getPage = ( page ) => {
        dispatch( getAllBrandPage( page ) )
    }
    const brand = useSelector( state => state.allBrand.brand )
    // const test = useSelector( state => state.allBrand.brand )
    const loading = useSelector( state => state.allBrand.loading )

    let numberOfPages = 0
    if ( brand.paginationResult )
        numberOfPages = brand.paginationResult.numberOfPages

    return (
        <div className='container'>

            <h1 className='text-xl md:text-2xl bg-[#474751] text-white p-2 text-center mb-20'style={{boxShadow:"0px 6px 0px 0px #2196f3"}}>All Brands</h1>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
                { loading === false ?
                    brand.data ? brand.data.map( item => {
                        return <Brand srcImg={ item.image } name={ item.name } key={ item._id } idBrand={ item._id }/>;

                    } ) : <h3>no item yet</h3>
                    : <div><Spinner /></div>
                }
                {/* <Brand srce={ one } />
                <Brand srce={ two } />
                <Brand srce={ three } />
                <Brand srce={ one } />
                <Brand srce={ two } />
                <Brand srce={ three } />
                <Brand srce={ one } />
                <Brand srce={ two } />
                <Brand srce={ three } />
                <Brand srce={ one } />
                <Brand srce={ two } /> */}
            </div>
            { numberOfPages > 1 ? <Pagination pageCount={ numberOfPages } onPress={ getPage } /> : null }
        </div>
    )
}

export default AllBrand