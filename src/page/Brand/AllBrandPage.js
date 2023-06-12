import React from 'react'
import Brand from '../../Component/Brand/Brand';
import one from "../../images/brand1.png"
import two from "../../images/brand2.png"
import three from "../../images/brand3.png"
import Pagination from '../../Component/utility/Pagination';

function AllBrand() {
    return (
        <div className='container'>

            <h1 className="text-3xl my-10" style={ { letterSpacing: "2px" } }>All categories</h1>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
                <Brand srce={ one } />
                <Brand srce={ two } />
                <Brand srce={ three } />
                <Brand srce={ one } />
                <Brand srce={ two } />
                <Brand srce={ three } />
                <Brand srce={ one } />
                <Brand srce={ two } />
                <Brand srce={ three } />
                <Brand srce={ one } />
                <Brand srce={ two } />
            </div>
            <Pagination />
        </div>
    )
}

export default AllBrand