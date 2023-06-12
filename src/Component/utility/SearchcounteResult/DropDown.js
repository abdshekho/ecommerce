import React, { useState } from 'react'
import { FaSortAmountDown, FaSortAmountUpAlt } from 'react-icons/fa';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import "./style.css"
function DropDown() {
    const [ open, setOpen ] = useState( false );

    // Change props and see effect
    return (
        // <UnopDropdown
        //     onAppear={ handler }
        //     onDisappearStart={ handler }
        //     delay={ 300 }
        //     align="CENTER"
        //     trigger={ <button className="AnimatedDropdownButton rounded-md flex items-center justify-between p-3 hover:text-blue-gray-600">
        //         Sort By { open ? <FaSortAmountUpAlt /> : <FaSortAmountDown /> } </button> }
        // >


        //     <div className={ `AnimatedDropdownStyles openAnimation${!open ? " closeAnimation" : ""} text-blue-gray-900` }>
        //         <div >Most Sales</div>
        //         <div>Most Rating</div>
        //         <div>From up</div>
        //         <div>From Down</div>
        //     </div>
        // </UnopDropdown>
        <div >
            <Menu open={open} handler={setOpen} >
                <MenuHandler >
                    <Button color='white' className='flex bg-white text-gray-800' >
                        Open Menu  {open?<FaSortAmountUpAlt className='ml-1' />:<FaSortAmountDown className='ml-1' />}
                    </Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
                </MenuList>
            </Menu>

        </div>
    );
}

export default DropDown