import { Checkbox, Input } from '@material-tailwind/react'
import React from 'react'

function SideFilter() {
    return (
        <div className='md:container  flex flex-col bg-gray-50 pb-10 h-full'>
            <div className='flex flex-col  mt-10'>
                <Checkbox label="" style={ { display: "none" } } />
                <div className=' '>
                    <h1 className='text-md md:text-xl  font-bold mb-2 pl-1'>Category</h1>
                </div>
                <div className='flex flex-col text-xs md:text-sm  ml-[-10px] sm:ml-[0]'>
                    <Checkbox size="sm" label="All" />
                    <Checkbox label="Title " />
                    <Checkbox label="1234567" />
                    <Checkbox label="Onetwot" />
                    <Checkbox label="one two s" />
                </div>

            </div>
            <div className='flex flex-col mt-10'>
                <div className=' '>
                    <h1 className='text-md md:text-xl  font-bold mb-2 pl-1'>Category</h1>
                </div>
                <div className='flex flex-col text-xs md:text-sm ml-[-10px] sm:ml-[0]'>
                    <Checkbox label="one two Me" />
                    <Checkbox label="one two " />
                    <Checkbox label="one two s" />
                </div>

                <div className='flex flex-col mt-10'>
                    <div className=' '>
                        <h1 className='text-md md:text-xl font-bold mb-2 pl-1'>Price</h1>
                    </div>
                    <div className='flex flex-col text-sm w-full overflow-hidden py-4 items-start'>
                        <Input label="From" className='' />
                        <div className='mt-4'>
                            <Input label="To" className='' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SideFilter