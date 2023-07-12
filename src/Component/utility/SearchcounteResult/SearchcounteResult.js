import React, { useState } from 'react'
import DropDownFilter from './DropDown'
import { FaArrowAltCircleDown, FaArrowAltCircleUp, FaFreeCodeCamp, FaRegListAlt, FaSortAmountDown, FaSortAmountUpAlt, FaStar } from 'react-icons/fa';
import { Menu, MenuHandler, MenuList, MenuItem, Button, } from "@material-tailwind/react";

function SearchcounteResult( { reslultCount, onClicked } ) {
    const [ open, setOpen ] = useState( false );
    const MostPay = ( e ) => {
        localStorage.setItem( "sortType", e.target.value )
        onClicked()
    }
    return (
        <div className='container flex justify-between my-10'>
            <div >
                <Menu open={ open } handler={ setOpen } >
                    <MenuHandler >
                        <Button color='white' className='flex bg-white text-gray-800' >
                            Sort by  { open ? <FaSortAmountUpAlt className='ml-1' /> : <FaSortAmountDown className='ml-1' /> }
                        </Button>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem onClick={ ( e ) => MostPay( e ) } value={ "Without sort" } className='flex'><FaRegListAlt className='mr-2' />  New</MenuItem>
                        <MenuItem onClick={ ( e ) => MostPay( e ) } value={ "Best seller" } className='flex'><FaFreeCodeCamp className='mr-2'/> Best seller</MenuItem>
                        <MenuItem onClick={ ( e ) => MostPay( e ) } value={ "Highest rated" } className='flex'><FaStar className='mr-2'/> Highest rated</MenuItem>
                        <MenuItem onClick={ ( e ) => MostPay( e ) } value={ "Price from above" } className='flex'><FaArrowAltCircleUp className='mr-2'/> Price from above</MenuItem>
                        <MenuItem onClick={ ( e ) => MostPay( e ) } value={ "Price from the lowest" } className='flex'><FaArrowAltCircleDown className='mr-2'/> Price from the lowest</MenuItem>
                    </MenuList>
                </Menu>

            </div>
            <h1 className='text-lg font-bold text-blue-gray-900'> The results: { reslultCount }</h1>
        </div>
    )
}

export default SearchcounteResult