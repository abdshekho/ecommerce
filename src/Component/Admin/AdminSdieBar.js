import React from 'react'
import { Link } from 'react-router-dom'
import { FaAddressCard, FaBezierCurve, FaCogs, FaListOl, FaMoneyCheckAlt, FaRegHeart, FaRegObjectUngroup, FaTh } from "react-icons/fa";

function AdminSdieBar() {
    const path = window.location.pathname;


    return (
        <div className='flex flex-col bg-white  rounded-xl rounded-t-none pb-2 text-center max-w-[220px] min-h-[100vh]'>
            <Link to={ "/admin/allorders" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/allorders" ? "side-profile-link-active" : "side-profile-link"}` }>
                    manage of orders<FaListOl className='hidden md:flex' />
                </div></Link>
            <Link to="/admin/allproducts">
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/allproducts" ? "side-profile-link-active" : "side-profile-link"}` }>
                    manage of products<FaCogs className='hidden md:flex' />
                </div></Link>
            <Link to={ "/admin/addbrand" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/addbrand" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add Brand <FaAddressCard className='hidden md:flex' />
                </div></Link>
            <Link to={ "/admin/addCategory" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/addCategory" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add Category <FaRegObjectUngroup className='hidden md:flex' />
                </div></Link>
            <Link to={ "/admin/addSubCategory" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/addSubCategory" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add sub Category<FaBezierCurve className='hidden md:flex' />
                </div></Link>
            <Link to={ "/admin/addproduct" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/addproduct" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add Product<FaTh className='hidden md:flex' />
                </div></Link>
            <Link to={ "/admin/addcoupon" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/addcoupon" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add coupon <FaMoneyCheckAlt className='hidden md:flex' />
                </div></Link>
            <Link to={ "/admin/favorite" }>
                <div className={ `flex justify-between items-center border-b-[1px] px-2  side-profile-link ${path === "/admin/favorite" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Favorite products <FaRegHeart className='hidden md:flex' />
                </div></Link>


        </div>
    )
}

export default AdminSdieBar