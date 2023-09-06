import React from 'react'
import UserOrderItem from './UserOrderItem'
import { Spinner } from '@material-tailwind/react'

function UserOrder( { cartItems } ) {
    return (
        <div >
            { cartItems && cartItems.length !== 0 && cartItems[ 0 ]?.product ?
                cartItems.map( ( item, index ) => {
                    return <UserOrderItem key={ index } title={ item?.product?.title } colorProduct={ item.color } imageCover={ item.product?.imageCover } idProduct={ item.product._id } count={ item.count } price={ item.price } />
                } )
                : < Spinner /> }
        </div>
    )
}

export default UserOrder