import React from 'react'
import UserSideBar from '../../Component/user/UserSideBar'
import UserAllOrders from '../../Component/user/UserAllOrders'

function UserAllOrderPage() {
    return (
        <div className='lg:container grid grid-cols-12 pt-10'>
            <div className='col-start-1 col-end-4 md:col-end-3'>
                <UserSideBar />
            </div>

            <div className='md:col-start-3 col-start-4 col-end-13 '>
                <UserAllOrders title={"All your orders"} price={200} idOrder={123456}/>
            </div>

        </div>
    )
}

export default UserAllOrderPage