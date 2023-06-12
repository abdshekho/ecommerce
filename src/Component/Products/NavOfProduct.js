import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, IconButton, } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function NavOfProduct() {
    const [ openNav, setOpenNav ] = useState( false );

    useEffect( () => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav( false )
        );
    }, [] );
    const propsOfLink = {
        as: "li",
        variant: "small",
        color: "blue-gray",
        className: "p-1 font-normal"
    }

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">All</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">elece</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">Clothes</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">Electronic</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">Sale</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">Electronic</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">Electronic</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">Electronic</a></Typography>
            <Typography { ...propsOfLink }><a href="/" className="flex items-center  hover:text-blue-gray-600">Electronic</a></Typography>
            <Link to="/AllCategory">
                <Typography { ...propsOfLink }><span href="/" className="flex items-center  hover:text-blue-gray-600">More</span></Typography>
            </Link>
        </ul>
    );
    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="hidden lg:block">{ navList }</div>
                <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={ false }
                    onClick={ () => setOpenNav( !openNav ) }>
                    { openNav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={ 2 }>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={ 2 }>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg> ) }
                </IconButton>
            </div>
            <MobileNav open={ openNav }>
                <div className="container mx-auto">
                    { navList }
                </div>
            </MobileNav>
        </Navbar>
    )
}

export default NavOfProduct