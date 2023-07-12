import React, { useEffect } from 'react'
import iteeeem from "../../images/item.png";
import clothe from "../../images/clothe.png";
import mobile from "../../images/mobile1.png"
import Spinner from "../../Component/utility/Spinner"
import AdminCartProduct from './AdminCartProduct';
import Pagination from '../utility/Pagination';
import { useDispatch } from 'react-redux';
import { getAllProductsPage, getAllProducts } from '../../redux/actions/productsAtion';
function AdminAllProduct( { products, pagination } ) {
    const dispatch = useDispatch()
    let numberOfPages = 0
    if ( pagination && pagination.length != 0 )
        numberOfPages = pagination.numberOfPages

    const getPage = async ( page ) => {
        await dispatch( getAllProductsPage( page, 8 ) )
    }
    return (
        <div className='md:container'>
            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>All Product</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2'>
                { products && products.length != 0 ?
                    products.data.map( ( item, index ) => {
                        return <AdminCartProduct key={ index } id={ item._id } title={ item.title } image={ item.imageCover } description={ item.description } price={ item.price } Rating={ item.ratingsAverage } />
                    } )
                    : <Spinner /> }

            </div>
            <div>
                { pagination && pagination.length != 0 ?

                    numberOfPages > 1 ? <Pagination pageCount={ numberOfPages } onPress={ getPage } /> : null
                    // numberOfPages > 1 ? <Pagination pageCount={ numberOfPages } onPress={ getPage } /> : null



                    : null }
            </div>
        </div>
    )
}

export default AdminAllProduct