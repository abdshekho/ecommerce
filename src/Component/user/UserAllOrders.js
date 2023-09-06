import React, { useEffect, useState } from 'react'
import UserOrder from './UserOrder'
import UserOrderItem from './UserOrderItem'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders } from '../../redux/actions/orderAction'
import { Spinner } from '@material-tailwind/react'
import Pagination from '../utility/Pagination'

function UserAllOrders( { title } ) {
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( false );
    const limit = 3

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
        <div className='container'>
            <h1 className='text-md md:text-xl  font-bold mb-1 pl-4 text-blue-gray-700'>{ resGetAllOrder.results ? title + " : " + resGetAllOrder.results : title + " : 0" }</h1>
            <div>
                { resGetAllOrder && resGetAllOrder.data ? resGetAllOrder.data.map( ( item, index ) => {
                    return (
                        <div className=' bg-white rounded-2xl container my-4 py-4' key={ index }>
                            <span className='flex text-md md:text-lg  font-bold  pl-4 my-2'>order Number <span className='text-blue-gray-600 pl-2'>#{ item.id }</span></span>
                            <UserOrder cartItems={ item.cartItems } />

                            <div className='col-span-2 flex flex-col lg:flex-row justify-between items-center lg:items-end py-4'>
                                <span className='font-[800] paragraph '>{ item.totalOrderPrice } $</span>
                                <span className='bg-white'>Deliver state: <span className='text-blue-gray-600'>{ item.isDelivered ? "Order complete" : "Underway" }</span> </span>
                                <span className='bg-white'>Payment method: <span className='text-blue-gray-600'>{ item.paymentMethodType }</span> </span>
                                <span className='bg-white'>payment state: <span className='text-blue-gray-600'>{ item.isPaid ? "done" : "not done" }</span> </span>
                            </div>
                        </div>

                    )
                } )


                    : <Spinner className='w-[50px] h-[50px]' />
                }
                { resGetAllOrder && resGetAllOrder.paginationResult && resGetAllOrder.results > 3 ?
                    <Pagination pageCount={ resGetAllOrder.paginationResult.numberOfPages } onPress={ onPagination } />
                    : <div></div>
                }
            </div>
        </div>

    )
}

export default UserAllOrders