import React from 'react'
import laptops from "../../images/laptops.png"

function Ads() {
    const backgroundBar ="linear-gradient(90deg, rgba(157,150,151,1) 0%, rgba(107,102,107,1) 30%, rgba(107,102,107,1) 45%, rgba(45,45,45,1) 100%)" 
    return (
        <div className='container flex justify-around rounded-xl my-20 p-4 items-center' style={{background:backgroundBar}}>
            <img src={laptops} alt='' className='max-w-[50%] h-[200px]'/>
            <div className='text-[35px] text-white font-sans'> discount to 30% on Laptops</div>
        </div> 
    )
}

export default Ads