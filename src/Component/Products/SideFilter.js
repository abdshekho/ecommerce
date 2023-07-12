import { Checkbox, Input } from '@material-tailwind/react'
import React from 'react'
import SidebarSearchHook from '../../hook/products/sidebar-search-hook'

function SideFilter() {
    const [ category, brand, clickCategory, clickBrand, priceFrom, priceTo, From, To ] = SidebarSearchHook()

    return (
        <div className='container  flex sm:flex-col justify-between sm:justify-start bg-gray-50 pb-10 h-full rounded-lg'>
            <div className='flex flex-col  mt-4'>
                <Checkbox label="" style={ { display: "none" } } />
                <div className=' '>
                    <h1 className='text-md md:text-xl  font-bold mb-2 pl-1'>Category</h1>
                </div>
                <div className='flex flex-col text-xs md:text-sm  ml-[-10px] sm:ml-[0]'>
                    <Checkbox size="sm" label="All" value={ "All" } onChange={ clickCategory } />
                    { category && category.length !== 0 ? category.map( ( item, index ) => {
                        return <Checkbox size="sm" key={ index } label={ item.name } value={ item._id } onChange={ clickCategory } />

                    } ) : <div></div> }
                    {/* <Checkbox label="Title " />
                    <Checkbox label="1234567" />
                    <Checkbox label="Onetwot" />
                    <Checkbox label="one two s" /> */}
                </div>

            </div>
            <div className='flex flex-col mt-10'>
                <div className=' '>
                    <h1 className='text-md md:text-xl  font-bold mb-2 pl-1'>Brand</h1>
                </div>
                <div className='flex flex-col text-xs md:text-sm ml-[-10px] sm:ml-[0]'>
                    <Checkbox size="sm" label="All" value={ "All" } onChange={ ( e ) => clickBrand( e ) } />
                    { brand && brand.length !== 0 ? brand.map( ( item, index ) => {
                        return <Checkbox size="sm" key={ index } label={ item.name } value={ item._id } onChange={ ( e ) => clickBrand( e ) } />

                    } ) : <div></div> }
                </div>


                <div className='flex flex-col mt-4'>
                    <div className=' '>
                        <h1 className='text-md md:text-xl font-bold mb-2 pl-1'>Price</h1>
                    </div>
                    <div className='flex flex-col text-sm w-full overflow-hidden py-4 items-start'>
                        <div>
                            <Input label="From" onChange={ priceFrom } className='' value={ From } />
                        </div>
                        <div className='mt-4'>
                            <Input label="To" onChange={ priceTo } className='' value={ To } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideFilter