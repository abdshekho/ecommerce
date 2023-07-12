import React, { useState } from 'react'
import { Chip, Select, Option, Button } from "@material-tailwind/react";
import { notifyError, notifySuccess } from '../../hook/useNotification';
import { changeOrderDeliver, changeOrderPay } from '../../redux/actions/orderAction';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

function AdminOrderDetails( { isDelivered, isPaid } ) {
    const { id } = useParams();
    const [ deliver, setDelever ] = useState( false )
    const [ payment, setPayment ] = useState( false )
    const [ loading, setLoading ] = useState( false )
    const dispatch = useDispatch()


    const DeliverChip = isDelivered ? "Delivery state : done" : "Delivery state : not done"
    const PaymentChip = isPaid ? "Payment state : done" : "Payment state : not done"
    const resChangeDeliver = useSelector( state => state.orderReducer.changeDeliver )
    const resChangePay = useSelector( state => state.orderReducer.changePay )
    const handelDelivery = ( e ) => {
        setDelever( e )
    }
    const handelPayment = ( e ) => {
        setPayment( e )
    }
    const handelEdit = async () => {
        setLoading( true )
        if ( !deliver && !payment ) {
            notifyError( "no change has to save" )
            setLoading( false )
            return
        }
        if ( deliver && !payment ) {
            await dispatch( changeOrderDeliver( id ) )
            setLoading( false )
            notifySuccess( "deliver state is changed successfully" )
            window.location.reload()
            return
        } if ( !deliver && payment ) {
            await dispatch( changeOrderPay( id ) )
            setLoading( false )
            notifySuccess( "payment state is changed successfully" )
            window.location.reload()
            return
        } if ( deliver && payment ) {
            await dispatch( changeOrderPay( id ) )
            await dispatch( changeOrderDeliver( id ) )
            setLoading( false )
            notifySuccess( "payment and deliver state is changed successfully" )
            window.location.reload()
            return
        }
    }


    return (
        <div className='pt-8'>
            <div className='flex gap-2 flex-col md:flex-row'>
                <Chip variant="ghost" value={ DeliverChip } color={ isDelivered ? 'teal' : `blue` } className='w-full text-center  py-4 my-2' />
                <Chip variant="ghost" value={ PaymentChip } color={ isPaid ? 'teal' : `blue` } className='w-full text-center  py-4 my-2' />
            </div>
            <div className='flex flex-col gap-5 md:flex-row my-2 md:gap-2'>

                <Select label="Delivery state" onChange={ handelDelivery }>
                    <Option value={ true } >done</Option>
                    <Option value={ false }>not done</Option>
                </Select>

                <Select label="Payment state" onChange={ handelPayment }>
                    <Option value={ true }>done</Option>
                    <Option value={ false }>not done</Option>
                </Select>
            </div>
            <div className='flex justify-center mt-8'>

                <Button className='ml-2 w-[200px]' onClick={ handelEdit }>Save</Button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminOrderDetails