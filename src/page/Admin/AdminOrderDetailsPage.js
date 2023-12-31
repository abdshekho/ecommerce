import React, { useEffect, useState } from 'react'
import AdminSdieBar from '../../Component/Admin/AdminSdieBar'
import AdminOrderDetails from '../../Component/Admin/AdminOrderDetails';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {  getOneOrders } from '../../redux/actions/orderAction';
import UserOrder from '../../Component/user/UserOrder';
import { Spinner } from '@material-tailwind/react';

function AdminOrderDetailsPage() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState( false );

    const get = async ( page ) => {
        await dispatch( getOneOrders( id ) )
    }
    useEffect( () => {
        setLoading( true )
        get()
        setLoading( false )

    }, [] )

    const resGetAllOrder = useSelector( state => state.orderReducer.getOneOrder )


    return (
        <div >
            <div className='grid grid-cols-12'>
                <div className='col-start-1 col-end-4 md:col-end-3'>
                    <AdminSdieBar />
                </div>

                <div className='col-start-4 md:col-start-3 col-end-13 pt-10 '>

                    { resGetAllOrder && resGetAllOrder.data && resGetAllOrder.data.cartItems &&resGetAllOrder.data.user ?

                        <div className='container  '>
                            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>Client Details</h1>
                            <div className='container bg-white rounded-lg py-10'>
                                <div className='pl-2 text-sm md:text-md'>
                                    <div>Name: <span className='text-blue-gray-500'>{ resGetAllOrder.data.user?.name }</span></div>
                                    <div>Phone: <span className='text-blue-gray-500'>{ resGetAllOrder.data.user?.phone }</span></div>
                                    <div>Email: <span className='text-blue-gray-500'>{ resGetAllOrder.data.user?.email }</span></div>
                                </div>
                                <AdminOrderDetails  isDelivered={ resGetAllOrder.data.isDelivered } isPaid={ resGetAllOrder.data.isPaid } />
                            </div>
                        </div>

                        : <Spinner />
                    }



                    { resGetAllOrder && resGetAllOrder.data && resGetAllOrder.data.cartItems ?
                        <div className='  container my-4 py-4'>
                            <div className='bg-white rounded-2xl px-2'>
                                <UserOrder cartItems={ resGetAllOrder.data.cartItems } />
                                <div className='col-span-2 flex flex-col lg:flex-row justify-between items-center lg:items-end py-4'>
                                    <span className='font-[800] paragraph '>{ resGetAllOrder.data.totalOrderPrice } $</span>
                                    <span className='bg-white'>deliver state: <span className='text-blue-gray-600'>{ resGetAllOrder.data.isDelivered ? "Order complete" : "Underway" }</span> </span>
                                    <span className='bg-white'>payment method: <span className='text-blue-gray-600'>{ resGetAllOrder.data.paymentMethodType }</span> </span>
                                    <span className='bg-white'>payment state: <span className='text-blue-gray-600'>{ resGetAllOrder.data.isPaid ? "done" : "not done" }</span> </span>
                                </div>
                            </div>
                        </div>
                        : <Spinner />
                    }
                </div>




            </div>
        </div>
    )
}
export default AdminOrderDetailsPage