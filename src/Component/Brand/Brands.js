import React from 'react';
import one from "../../images/brand1.png"
import two from "../../images/brand2.png"
import three from "../../images/brand3.png"
import Brand from './Brand';
import BarOfHomePage from '../utility/BarOfHomePage';
function Brands() {
    return (
        <div className='container mt-20'>
            <BarOfHomePage title={ "Brands" } btnTitle={ "More" } pathRoute={ "AllBrand" } />
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
                <Brand srce={ one } />
                <Brand srce={ two } />
                <Brand srce={ three } />
                <Brand srce={ one } />
                <Brand srce={ two } />
            </div>
        </div>
    )
}

export default Brands