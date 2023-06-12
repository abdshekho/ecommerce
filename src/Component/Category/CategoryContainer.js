import React from 'react'
import CategoryCard from './CategoryCard';
import clothes from "../../images/clothe.png"
import laptop from "../../images/labtop.png"
import cat2 from "../../images/cat2.png"
import pic from "../../images/pic.png"
import BarOfHomePage from '../utility/BarOfHomePage';

function Category() {
    return (
        <div className='container mt-20'>
            <BarOfHomePage title={ "Categoriesss" } btnTitle={ "More" } pathRoute={ "AllCategory" } />

            <div className='grid items-baseline grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
                <CategoryCard srcImg={ clothes } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ cat2 } title="categorys" />
                <CategoryCard srcImg={ laptop } title="categorys" />
                <CategoryCard srcImg={ pic } title="categorys" />
            </div>
        </div>
    )
}

export default Category