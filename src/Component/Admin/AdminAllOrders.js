import React, { useEffect, useState } from 'react'
import AdminOrderItem from './AdminOrderItem'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrders } from '../../redux/actions/orderAction';
import Pagination from '../utility/Pagination';

function AdminAllOrders( { title } ) {
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( false );
    const limit = 5

    const get = async ( page ) => {
        await dispatch( getAllOrders( page, limit ) )
    }
    useEffect( () => {
        setLoading( true )
        get()
        setLoading( false )

    }, [] )

    const resGetAllOrder = useSelector( state => state.orderReducer.getAllOrders )

    const onPagination = async ( page ) => {
        get( page )

    }

    return (
        <div>
            <h1 className='text-md md:text-xl  font-bold mb-1 pl-4 text-blue-gray-700'>{ resGetAllOrder.results ? title + " : " + resGetAllOrder.results : title + " : loading..." }</h1>
            <div className='container flex flex-col-reverse lg:grid '>
                { resGetAllOrder && resGetAllOrder.data ? resGetAllOrder.data.map( ( item, index ) => {
                    return < AdminOrderItem key={ index } idOrder={ item.id } id={ item._id } createdAt={ item.createdAt } isDelivered={ item.isDelivered } userName={ item.user.name } userEmail={ item.user.email } isPaid={ item.isPaid } price={ item.totalOrderPrice } paymentMethodType={ item.paymentMethodType } />
                } )

                    : <div></div>
                }
            </div>
            { resGetAllOrder && resGetAllOrder.paginationResult && resGetAllOrder.results > limit ?
                <Pagination pageCount={ resGetAllOrder.paginationResult.numberOfPages } onPress={ onPagination } />
                : <div></div>
            }
        </div>
    )
}

export default AdminAllOrders