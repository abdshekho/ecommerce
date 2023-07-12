import React from 'react'
import UserSideBar from '../../Component/user/UserSideBar'
// import UserAllAddress from '../../Component/user/UserAllAddress'
// import { Button } from '@material-tailwind/react'
import UserAddNewAddress from '../../Component/user/UserAddNewAddress'

function UserEditAddressPage() {
    return (
        <div>
            <div className='lg:container grid grid-cols-12 pt-10 '>
                <div className='col-start-1 col-end-4 md:col-end-3'>
                    <UserSideBar />
                </div>

                <div className='md:col-start-3 col-start-4 col-end-13 '>
                    <UserAddNewAddress title={"Edite Address"} titleButton={"save address edite"}/>
                </div>

            </div>
        </div>
    )
} 

export default UserEditAddressPage