import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaAddressBook, FaAddressCard, FaBriefcase, FaHeart, FaUserAlt } from "react-icons/fa";

function UserSideBar() {

    // useEffect( () => {

    // } )
    const path = window.location.pathname;

    return (
        <div className='flex flex-col bg-white  rounded-xl rounded-t-none pb-2 text-center max-w-[220px] min-h-[100vh] '>
            <Link to={ "/user/user-profile" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2 side-profile-link ${path === "/user/user-profile" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Personal profile <FaUserAlt className='hidden md:flex' />
                </div></Link>
            <Link to={ "/user/allorders" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/user/allorders" ? "side-profile-link-active" : "side-profile-link"}` } >
                    manage of orders <FaBriefcase className='hidden md:flex' />
                </div></Link>
            <Link to="/user/favorite">
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/user/favorite" ? "side-profile-link-active" : "side-profile-link"}` }>
                    list of Favorite <FaHeart className='hidden md:flex' />
                </div></Link>
            <Link to={ "/user/address" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/user/address" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Personal Address <FaAddressCard className='hidden md:flex' />
                </div></Link>
            <Link to={ "/user/AddNewAddress" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/user/AddNewAddress" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add new address <FaAddressBook className='hidden md:flex'/>
                </div></Link>



        </div>
    )
}

export default UserSideBar