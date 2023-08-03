import React from 'react'
import AdminSdieBar from '../../Component/Admin/AdminSdieBar'
import AdminEditProducts from '../../Component/Admin/AdminEditProducts'

function AdminEditProductsPage() {
    return (
        <div className='grid grid-cols-12'>
            <div className='col-start-1 col-end-4 md:col-end-3'>
                <AdminSdieBar />
            </div>

            <div className='col-start-4 md:col-start-3 col-end-13 pt-10'>
                <AdminEditProducts />
            </div>
        </div>
    )
}

export default AdminEditProductsPage