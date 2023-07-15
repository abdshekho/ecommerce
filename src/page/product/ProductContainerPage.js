import React from 'react'
import NavOfProduct from '../../Component/Products/NavOfProduct'
import Pagination from '../../Component/utility/Pagination'
import SearchcounteResult from '../../Component/utility/SearchcounteResult/SearchcounteResult'
import SideFilter from '../../Component/Products/SideFilter'
// import ViewHomeProductsHook from '../../hook/view-home-products-hook'
import CardProductsContainer from '../../Component/Products/CardPrandsContainer'
import ViewSreachProductsHook from '../../hook/products/view-sreach-products-hook'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from '@material-tailwind/react';


function ProductContainerPage() {
    const [ items, getPage, getProduc ] = ViewSreachProductsHook();
    const loading = useSelector( state => state.allproduts.loading )
    // const dispatch = useDispatch()
    let pagination = {}
    if ( items && items.length !== 0 ) {
        pagination = items.paginationResult
    }
    let numberOfPages = 0
    if ( pagination && pagination.length !== 0 )
        numberOfPages = pagination.numberOfPages

    // console.clear()
    return (
        <div>
            <NavOfProduct />
            { items && items.results ? <SearchcounteResult reslultCount={ items.results } onClicked={ getProduc } /> : <SearchcounteResult reslultCount={ 0 } /> }

            <div className='flex flex-col-reverse sm:flex-row xl:container'>
                <div className="col-start-1 col-end-4 md:col-end-3  w-full sm:max-w-[170px] lg:max-w-[200px]">

                    <SideFilter />
                </div>

                <div className='md:col-start-3 col-start-4 col-end-13 mt--20 mx-auto'>
                    { !loading && items.data && items.data.length != 0 ? <CardProductsContainer titleOfBar={ "All products" } prodcuts={ items.data } /> :
                        <div className='m-10'>
                            <h5 className="font-sans text-xl font-semibold leading-snug text-gray-700 text-center">not found product about your search....</h5>
                        </div>
                    }


                    { pagination && pagination.length !== 0 ?

                        numberOfPages > 1 ? <Pagination pageCount={ numberOfPages } onPress={ getPage } /> : null
                        : null }
                </div>
            </div>

        </div>
    )
}

export default ProductContainerPage

