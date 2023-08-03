import React from 'react'
import UserSideBar from '../../Component/user/UserSideBar'
// import UserAllAddress from '../../Component/user/UserAllAddress'
// import { Button } from '@material-tailwind/react'
import UserAddNewAddress from '../../Component/user/UserAddNewAddress'

function UserAddNewAddressPage() {
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-start-1 col-end-4 md:col-end-3'>
                    <UserSideBar />
                </div>

                <div className='col-start-4 md:col-start-3 col-end-13 pt-10 '>
                    <UserAddNewAddress title={"Add new Address"} titleButton={"Addd new Address"}/>
                </div>

            </div>
        </div>
    )
}

export default UserAddNewAddressPage