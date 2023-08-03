import React from 'react'
import UserSideBar from '../../Component/user/UserSideBar'
import UserAllAddress from '../../Component/user/UserAllAddress'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

function UserAllAddressPage() {
    return (
        <div>
            <div className='grid grid-cols-12 '>
                <div className='col-start-1 col-end-4 md:col-end-3'>
                    <UserSideBar />
                </div>

                <div className='col-start-4 md:col-start-3 col-end-13 pt-10 '>
                    <UserAllAddress titlePage={ "Address book" } />
                    <div className='flex justify-center items-center'>
                        <Link to={ "/user/AddNewAddress" }>
                            <Button>Add new Address</Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserAllAddressPage