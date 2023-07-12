import React, { useEffect, useState } from 'react'
import { Input, Button, Chip, Spinner } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaDollarSign } from 'react-icons/fa';
import { applayCoupnCart } from '../../redux/actions/cartAction';
import { notifyError, notifySuccess } from '../../hook/useNotification';
import ApplyCopon from './applyCopon';
function CartCheckOut( { cartItem } ) {
    // const [ applyCopno, couponName, setCouponName, loaingCopon, setLodingCopon, priceAfterDiscount, totalCartPrice, onChange ] = ApplyCopon();
    const [ applyCopno, couponName, setCouponName, totalCartPrice, priceAfterDiscount, loaingCopon, onChange, setLodingCopon, newCount, handelCount, handleDelete, loadingDelete, setNewCount, loadingCount ] = ApplyCopon();

    // const [ couponName, setCouponName ] = useState( "" );
    const navigate = useNavigate();
    const resGetCart = useSelector( state => state.cartReducer.getAllUserCart )
    const toPaymethoud = () => {
        if ( resGetCart && resGetCart.numOfCartItems && resGetCart.numOfCartItems > 0 ) {
            navigate( "/order/paymethoud" )
        } else {
            notifyError( "your cart is empty plase Add to cart to complete purchases  process" )
        }

    }
    return (
        <div className='flex flex-col gap-3'>
            <div className="relative flex w-full ">
                <Input type="text" label="Cobon Code" value={ couponName } onChange={ onChange } className="pr-20" containerProps={ { className: "min-w-0", } } />
                <Button size="sm" onClick={ applyCopno } color={ couponName ? "blue" : "blue-gray" } disabled={ couponName && couponName.length ? couponName.length < 3 : "" } className="!absolute right-1 top-1 rounded">Set</Button>
            </div>
            <Chip value={ "total price: " + totalCartPrice + " $ " } variant="ghost" className='text-center p-3' />
            { loadingDelete ? <Spinner className="h-12 w-12" /> : <div></div> }

            { loaingCopon ? <Spinner className="h-16 w-16 " />
                : priceAfterDiscount === 0 ? <div></div>
                    : <Chip value={ "price After discount: " + priceAfterDiscount + " $" } color='green' variant="ghost" className='text-center p-3' />
            }



            <Button className='w-full' onClick={ toPaymethoud }>Complate</Button>
        </div>
    )

}

export default CartCheckOut