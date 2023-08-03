import { useState, useEffect } from "react";
import { Navbar, MobileNav, Typography, IconButton, Spinner, Collapse, } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SidebarSearchHook from "../../hook/products/sidebar-search-hook";
import { getAllCategory, getAllCategoryPage, getAllCategoryToNav } from "../../redux/actions/categoryAction";

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
        className: "p-1 font-normal flex items-center  hover:text-[#2196f3]"
    }


    const dispatch = useDispatch();

    useEffect( () => {
        const one = async () => {

            await dispatch( getAllCategoryToNav( 9 ) )
        }
        one()
    }, [ dispatch ] )


    const categoryNav = useSelector( state => state.allCategory.categoryToNav )
    const loading = useSelector( state => state.allCategory.loading )



    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4 ">
            { loading === false ?
                categoryNav && categoryNav.data ? categoryNav.data.map( item => {
                    return (
                        <Link to={ `/products/category/${item.name}/${item._id}` } key={ item._id }>
                            <Typography { ...propsOfLink } >{ item.name }</Typography>
                        </Link>
                    )


                } ) : <h3>no item yet</h3>
                : <div><Spinner /></div>
            }
            <Link to="/AllCategory">
                <Typography { ...propsOfLink }><span href="/" className="flex items-center  hover:text-[#2196f3]">More</span></Typography>
            </Link>
        </ul>
    );
    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
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
            <Collapse  open={ openNav }>
                <div className="container mx-auto">
                    { navList }
                </div>
            </Collapse >
        </Navbar>
    )
}

export default NavOfProduct