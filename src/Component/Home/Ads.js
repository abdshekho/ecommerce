import React from 'react'
import laptops from "../../images/laptops.webp"

function Ads() {
    const backgroundBar = "linear-gradient(90deg, rgba(157,150,151,1) 0%, rgba(107,102,107,1) 30%, rgba(107,102,107,1) 45%, rgba(45,45,45,1) 100%)"
    return (
        <div className='container flex flex-col sm:flex-row justify-around rounded-xl my-20 p-4 sm:p-4 items-center shadow-2xl' style={ { background: backgroundBar } }>
            <img src={ laptops } alt='' className='max-w-[90%] sm:max-w-[60%] h-[200px]' />
            <div className='text-[18px] md:text-[35px] text-white  py-4 sm:py-0'> discount to 30% on Laptops</div>
        </div>
    )
}

export default Ads