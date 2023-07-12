import React from 'react'
import { Link } from 'react-router-dom'

function AdminSdieBar() {
    const path = window.location.pathname;

    return (
        <div className='flex flex-col bg-white rounded-xl pb-2 text-center min-h-[85vh]'>
            <Link to={ "/admin/allorders" }>
                <div className={ `border-b-[1px] px-2 rounded-t-xl side-profile-link ${path === "/admin/allorders" ? "side-profile-link-active" : "side-profile-link"}` }>
                    manage of orders
                </div></Link>
            <Link to="/admin/allproducts">
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/admin/allproducts" ? "side-profile-link-active" : "side-profile-link"}` }>
                    manage of products
                </div></Link>
            <Link to={ "/admin/addbrand" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/admin/addbrand" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add Brand
                </div></Link>
            <Link to={ "/admin/addCategory" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/admin/addCategory" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add Category
                </div></Link>
            <Link to={ "/admin/addSubCategory" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/admin/addSubCategory" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add sub Category
                </div></Link>
            <Link to={ "/admin/addproduct" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/admin/addproduct" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add Product
                </div></Link>
            <Link to={ "/admin/addcoupon" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/admin/addcoupon" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Add coupon
                </div></Link>
            <Link to={ "/admin/favorite" }>
                <div className={ `border-b-[1px] px-2  side-profile-link ${path === "/admin/favorite" ? "side-profile-link-active" : "side-profile-link"}` }>
                    Favorite products
                </div></Link>


        </div>
    )
}

export default AdminSdieBar