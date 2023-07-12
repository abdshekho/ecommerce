import React from 'react'
import AdminSdieBar from '../../Component/Admin/AdminSdieBar'
import AdminAddCoupon from '../../Component/Admin/AdminAddCoupon'

function AdminAddCouponPage() {
    return (
        <div className='lg:container grid grid-cols-12 pt-10'>
            <div className='col-start-1 col-end-4 md:col-end-3'>
                <AdminSdieBar />
            </div>

            <div className='md:col-start-3 col-start-4 col-end-13 '>
                <AdminAddCoupon />
            </div>
        </div>
    )
}

export default AdminAddCouponPage