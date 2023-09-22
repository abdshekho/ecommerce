import React from 'react'
import UserSideBar from '../../Component/user/UserSideBar'
import UserAllOrders from '../../Component/user/UserAllOrders'
import { Link } from 'react-router-dom'
import { Button } from '@material-tailwind/react'

function UserAllOrderPage() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-start-1 col-end-4 md:col-end-3'>
                <UserSideBar />
            </div>

            <div className='col-start-4 md:col-start-3 col-end-13 pt-10 '>
                <UserAllOrders title={ "All your orders" } />
                <div className='flex justify-center my-10 items-center'>
                    <Link to={ "/Proudcts" }>
                        <Button>Products browse</Button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default UserAllOrderPage