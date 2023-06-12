import React from 'react'
import NavOfProduct from '../../Component/Products/NavOfProduct'
import SlideShowProduct from '../../Component/Products/SlideShowProduct'
import DetailsProduct from '../../Component/Products/DetailsProduct'
import RateContainer from '../../Component/RateContainer/RateContainer'
import CardProductsContainer from '../../Component/Products/CardPrandsContainer'
// import mobile from "../../images/mobile1.png"

function ProductDetailsPage() {
    return (
        <div className=''>
            <NavOfProduct />
            <div className='container  block md:grid-cols-12 md:grid  mt-10'>
                <div className='col-span-4 md:w-[90%] bg-[#3a4451] rounded-xl'>
                    <SlideShowProduct />
                </div>
                <div className='col-span-8 mb-10 md:mb-0'>
                    <DetailsProduct />
                </div>
            </div>
            <div className='container bg-gray-100 p-6 rounded-3xl mt-10'>
                <RateContainer />
            </div>
            <div>
                <CardProductsContainer title={"relation products"}/>
            </div>
        </div>
    )
}

export default ProductDetailsPage