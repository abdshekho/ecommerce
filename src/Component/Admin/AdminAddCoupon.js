import { Button, Input, Tooltip } from '@material-tailwind/react'
import React from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import AddCouponHook from '../../hook/coupon/Add-coupon-hook';
import { ToastContainer } from 'react-toastify';
import Spinner from '../utility/Spinner';
import AdimCouponCard from './AdimCouponCard';

function AdminAddCoupon() {
    const [ couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit, loading, allCoupon, loadingGetCoupon ] = AddCouponHook()

    return (
        <div className='container'>
            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>Add new coupon</h1>
            <div className='container bg-white shadow-lg px-4 pt-10 pb-4 rounded-md mb-10'>

                <div className='my-6'>
                    <Input label='Name of coupon' value={ couponName } onChange={ onChangeName } />
                </div>
                <div className='my-6'>
                    <Input label='date finished' type='date' value={ couponDate } onChange={ onChangeDate } />
                </div>
                <div className='my-6'>
                    <Input label='discount percentage' value={ couponValue } onChange={ onChangeValue } />
                </div>
                <div className='my-6'>
                    <Button onClick={ onSubmit }> Add new coupon</Button>
                </div>
                { loading ? <Spinner /> : <div></div> }

            </div>

            <h1 className='text-md md:text-xl  font-bold mb-1 pb-4 text-blue-gray-700'>All coupons</h1>
            { !loadingGetCoupon ?
                allCoupon && allCoupon.lenght !== 0 ?
                    allCoupon.map( ( item, index ) => {
                        return <AdimCouponCard key={ index } id={ item._id } couponName={ item.name } couponDate={ item.expire.slice( 0, 10 ) } couponValue={ item.discount } createAt={ item.createdAt.slice( 0, 10 ) } />

                    } )
                    : <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-700 text-center">you don't have  favorite products yet</h5>
                : <Spinner /> }
            <ToastContainer />
        </div>
    )
}

export default AdminAddCoupon