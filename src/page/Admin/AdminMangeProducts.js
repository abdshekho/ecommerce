import React from 'react'
import AdminSdieBar from '../../Component/Admin/AdminSdieBar'
import AdminAllProduct from '../../Component/Admin/AdminAllProduct'
import Pagination from '../../Component/utility/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import ViewProductsAdminHook from '../../hook/admin/view-products-admin-hook'

function AdminMangeProducts() {
    const [item] = ViewProductsAdminHook();
    let pagination = {}
if(item && item.length != 0){
    pagination = item.paginationResult
}
    return (
        <div className='grid grid-cols-12'>
            <div className='col-start-1 col-end-4 md:col-end-3'>
                <AdminSdieBar />
            </div>

            <div className='col-start-4 md:col-start-3 col-end-13 pt-10 '>
                <AdminAllProduct products={item} pagination={pagination}/>
            </div>

        </div>
    )
}

export default AdminMangeProducts