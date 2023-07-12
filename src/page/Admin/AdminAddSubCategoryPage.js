import React from 'react'
import AdminSdieBar from '../../Component/Admin/AdminSdieBar'
import AdminAddSubCategory from '../../Component/Admin/AdminAddSubCategory'



function AdminAddSubCategoryPage() {


    return (
        <div className='lg:container grid grid-cols-12 pt-10'>
            <div className='col-start-1 col-end-4 md:col-end-3'>
                <AdminSdieBar />
            </div>

            <div className='md:col-start-3 col-start-4 col-end-13 '>
                <AdminAddSubCategory />
            </div>
        </div>
    )
}

export default AdminAddSubCategoryPage