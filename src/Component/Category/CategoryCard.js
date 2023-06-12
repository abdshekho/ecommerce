import React from 'react'

function CategoryCard({srcImg,title}) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={srcImg} alt='' className='max-h-[168px]'/>
            <h2 className='text-2xl text-center mt-4 text-blue-gray-600 '>{title}</h2>
        </div>
    )
}

export default CategoryCard