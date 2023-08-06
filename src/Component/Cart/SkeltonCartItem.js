import { Skeleton } from '@mui/material'
import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Button, Input } from '@material-tailwind/react'

function SkeltonCartItem() {
    return (
        <div className='container bg-white flex flex-col sm:grid  grid-cols-12 py-2 my-4 rounded-lg shadow-lg'>
            <div className='col-span-3 sm:mr-4'>
                <Skeleton variant='rounded' className='w-full' height={ 200 } animation="wave"/>
            </div>

            <div className='col-span-7 flex flex-col py-6'>
                <Skeleton  className='w-full justify-center items-center' height={ 70 } />
                <Skeleton className='w-full' height={ 70 } />
                <span className='flex'><h1 className='text-md md:text-xl  font-bold mr-1 bg-[#eff0f4] p-2 rounded-lg text-blue-gray-900'>Brand: </h1> <Skeleton width={ 100 } height={ 50 } /></span>
                <Skeleton className='w-full' height={ 60 } />

                {/* color */ }

                <div className=''>

                    <div className="relative flex max-w-[300px] my-6">

                        <Input type="number" label="Quantity" value={ "newCount" } className="pr-20" containerProps={ { className: "min-w-0", } } />
                        <Button size="sm" color={ "blue" } className="!absolute right-1 top-1 rounded" >Set</Button>
                    </div>

                </div>
            </div>
            <div className='col-span-2 flex sm:flex-col justify-around  items-center md:items-end'>
                <span className='flex items-center cursor-pointer text-white  bg-[#000000c2] p-[7px] rounded-lg'><FaTrashAlt className='mr-1' /><span >Delete</span></span>
                <span className='font-[800] text-sm md:text-lg text-right sm:text-left'>{ 99 } $</span>
            </div>
        </div>
    )
}

export default SkeltonCartItem