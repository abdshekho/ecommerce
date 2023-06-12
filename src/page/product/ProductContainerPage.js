import React from 'react'
import NavOfProduct from '../../Component/Products/NavOfProduct'
import Pagination from '../../Component/utility/Pagination'
import SearchcounteResult from '../../Component/utility/SearchcounteResult/SearchcounteResult'
import SideFilter from '../../Component/Products/SideFilter'
import ProductCard from '../../Component/Products/ProductCard'
import item from "../../images/item.png";
import clothe from "../../images/clothe.png";
import mobile from "../../images/mobile1.png"

function ProductContainerPage() {
    const descriptionOne = 'this is field to write about product or Discraption'
    return (
        <div>
            <NavOfProduct />
            <SearchcounteResult />
            <div className='lg:container grid grid-cols-12'>
                <div className="col-start-1 col-end-4 md:col-end-3">

                    <SideFilter />
                </div>

                <div className='md:col-start-3 col-start-4 col-end-13 '>
                    <div className='md:container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-2 ml-2 '>
                        <ProductCard image={ item } description={ descriptionOne } price={ 800 } Rating={ 4.2 } />
                        <ProductCard image={ mobile } description={ descriptionOne } price={ 600 } Rating={ 3.4 } />
                        <ProductCard image={ clothe } description={ descriptionOne } price={ 750 } Rating={ 2.5 } />
                        <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                        <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                        <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                        <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                        <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                        <ProductCard image={ mobile } description={ descriptionOne } price={ 1000 } Rating={ 4.9 } />
                    </div>

                </div>
            </div>
            <Pagination />

        </div>
    )
}

export default ProductContainerPage