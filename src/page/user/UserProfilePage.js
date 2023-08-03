import React from 'react'
import UserSideBar from '../../Component/user/UserSideBar'
import UserProfile from '../../Component/user/UserProfile'

function UserProfilePage() {
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-start-1 col-end-4 md:col-end-3'>
                    <UserSideBar />
                </div>

                <div className='col-start-4 md:col-start-3 col-end-13 pt-10 '>
                <UserProfile />
                </div>

            </div>
        </div>
    )
}

export default UserProfilePage