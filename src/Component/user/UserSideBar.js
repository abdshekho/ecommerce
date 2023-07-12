import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function UserSideBar() {

    // useEffect( () => {

    // } )
    const path = window.location.pathname;

    return (
        <div className='flex flex-col bg-white rounded-xl pb-2 text-center min-h-[85vh] '>
            <Link to={ "/user/user-profile" }>
                <div className={ `border-b-[1px] px-2 rounded-t-xl  side-profile-link ${path === "/user/user-profile" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Personal profile
                </div></Link>
            <Link to={ "/user/allorders" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/user/allorders" ? "side-profile-link-active" : "side-profile-link"}` } >
                    manage of orders
                </div></Link>
            <Link to="/user/favorite">
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/user/favorite" ? "side-profile-link-active" : "side-profile-link"}` }>
                    list of Favorite
                </div></Link>
            <Link to={ "/user/address" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/user/address" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Personal Address
                </div></Link>
            <Link to={ "/user/AddNewAddress" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/user/AddNewAddress" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add new address
                </div></Link>



        </div>
    )
}

export default UserSideBar