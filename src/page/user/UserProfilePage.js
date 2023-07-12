import React from 'react'
import UserSideBar from '../../Component/user/UserSideBar'
import UserProfile from '../../Component/user/UserProfile'

function UserProfilePage() {
    return (
        <div>
            <div className='lg:container grid grid-cols-12 pt-10 '>
                <div className='col-start-1 col-end-4 md:col-end-3'>
                    <UserSideBar />
                </div>

                <div className='md:col-start-3 col-start-4 col-end-13 '>
                <UserProfile />
                </div>

            </div>
        </div>
    )
}

export default UserProfilePage