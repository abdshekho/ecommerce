import React from 'react'
import AdminAllOrders from '../../Component/Admin/AdminAllOrders'
import AdminSdieBar from '../../Component/Admin/AdminSdieBar'

function AdminAllOrderPage() {
    return (
        <div className='lg:container grid grid-cols-12 pt-10'>
            <div className='col-start-1 col-end-4 md:col-end-3'>
                <AdminSdieBar />
            </div>

            <div className='md:col-start-3 col-start-4 col-end-13 '>
                <AdminAllOrders title={"All order"}/>
            </div>
        </div>
    )
}

export default AdminAllOrderPage