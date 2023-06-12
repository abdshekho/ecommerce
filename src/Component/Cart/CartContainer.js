import React from 'react'
import CartItem from './CartItem'
import CartCheckOut from './CartCheckOut'

function CartContainer() {
    const Descriptoin = "iphon XR memory Storage 128GB and support LTE 4g with Applicatoin"
    return (
        <div className='container flex flex-col-reverse lg:grid grid-cols-12 py-10'>
            <div className='col-span-9 '>
                <CartItem Category={ "Electronic" } Brand={ "Apple" } Descriptoin={ Descriptoin } price={ 400 } />
                <CartItem Category={ "Electronic" } Brand={ "Apple" } Descriptoin={ Descriptoin } price={ 400 } />
                <CartItem Category={ "Electronic" } Brand={ "Apple" } Descriptoin={ Descriptoin } price={ 400 } />
                <CartItem Category={ "Electronic" } Brand={ "Apple" } Descriptoin={ Descriptoin } price={ 400 } />
            </div>
            <div className='col-span-3 px-2 py-10'>
                <CartCheckOut />
            </div>
        </div>
    )
}

export default CartContainer