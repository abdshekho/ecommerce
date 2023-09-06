import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import CartCheckOut from './CartCheckOut'
import GetAllUserCart from '../../hook/cart/get-all-user-cart-hook'
import { Button, Spinner } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllCartItem } from '../../redux/actions/cartAction'
import { notifySuccess } from '../../hook/useNotification'
import { ToastContainer } from 'react-toastify'
import SkeltonCartItem from './SkeltonCartItem'

function CartContainer() {
    const [ itemNum, , loadingGet ] = GetAllUserCart()
    const [ loadingDeleteAll, setLoadingDeleteAll ] = useState( false )
    const [ cartItem, setCarItem ] = useState( "" )
    // const [ totalCartPrice, setTotalPrice ] = useState( "" )
    const resGetCart = useSelector( state => state.cartReducer.getAllUserCart )
    useEffect( () => {
        if ( resGetCart && resGetCart.data && resGetCart.data.products ) {
            setCarItem( resGetCart.data.products )
        }
    }, [ resGetCart ] )
    const dispatch = useDispatch();

    const handelDelete = async () => {
        setLoadingDeleteAll( true )
        await dispatch( clearAllCartItem() )
        setLoadingDeleteAll( false )
        notifySuccess( "action complete " )

        setTimeout( () => {
            window.location.reload()
        }, 1000 )

    }

    return (
        <div className='container flex flex-col-reverse lg:grid grid-cols-12 py-10 '>
            <div className='col-span-9 '>
                { !loadingGet && cartItem ? cartItem && cartItem.length && cartItem.length != 0 ?
                    cartItem.map( ( item, index ) => {
                        // if ( item.title && item.color && item._id && item.product && item.product.title && item.product.ratingsAverage && item.product.imageCover && item.count && item.product.category && item.product.category.name && item.product.brand && item.product.brand.name && item.price )
                        if ( item.product !== null )
                            return <CartItem key={ index } idProduct={ item.product._id } idCartItem={ item._id } color={ item.color || "#ffffff" } title={ item.product.title } ratingsAverage={ item.product.ratingsAverage } imageCover={ item.product.imageCover } count={ item.count } Category={ item.product.category.name } Brand={ item.product.brand.name } price={ item.price } />

                        if ( item.product === null )
                            return <CartItem key={ index } idCartItem={ item._id } color={ item.color || "#ffffff" } title={ "product may be Deleted already" } ratingsAverage={ "product may be Deleted already" } imageCover={ "product may be Deleted already" } count={ item.count } Category={ "product may be Deleted already" } Brand={ "product may be Deleted already" } price={ item.price } />

                    } )
                    : <h5 className="font-sans text-xl font-semibold leading-snug text-gray-700 text-center">you did't add any product to cart</h5>
                    : <div>
                        <SkeltonCartItem />
                        <SkeltonCartItem />
                    </div>
                    // <Spinner className="h-16 w-16 text-blue-500/10" />
                }
                { cartItem && cartItem.length && cartItem.length != 0 ?
                    <div className='flex justify-center my-10'>
                        <Button color='red' onClick={ handelDelete }>Empty the cart</Button>
                        { loadingDeleteAll ? <Spinner className="h-16 w-16 text-blue-500/10" /> : <div></div> }
                    </div>
                    : <div></div> }
            </div>
            <div className='col-span-3 px-2 py-10'>
                <CartCheckOut cartItem={ cartItem } />
            </div>
            <ToastContainer />
        </div >
    )
}

export default CartContainer