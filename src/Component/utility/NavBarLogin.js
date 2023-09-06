
import logo from "../../images/logo.png"
import { Navbar, IconButton, Button, Input, Avatar, Menu, MenuHandler, MenuList, MenuItem, Badge, Tooltip } from "@material-tailwind/react";
import { FaAddressCard, FaBezierCurve, FaBriefcase, FaCogs, FaHeart, FaListOl, FaMoneyCheckAlt, FaPowerOff, FaRegHeart, FaRegObjectUngroup, FaSearch, FaShoppingCart, FaTh, FaUserAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavSearchHook from "../../hook/products/navbar-search-hook";
import GetAllUserCart from "../../hook/cart/get-all-user-cart-hook";
import { useSelector } from "react-redux";

const NavBarLogin = () => {

    // let word = "";
    // if(localStorage.getItem("searchWord"))
    const [ searchValue, setSearchValue ] = useState( localStorage.getItem( "searchWord" ) != null ? localStorage.getItem( "searchWord" ) : "" )
    const [ searchWord, onChangeSearch ] = NavSearchHook( searchValue )
    const [ open, setOpen ] = useState( false );

    useEffect( () => {
        localStorage.setItem( "searchWord",searchValue ) 
    }, [searchValue] )
    let user = "";
    if ( localStorage.getItem( "user" ) )
        user = JSON.parse( localStorage.getItem( "user" ) )

    useEffect( () => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if ( prevScrollpos > currentScrollPos ) {
                document.getElementById( "navbar" ).style.top = "0";
            } else if ( prevScrollpos < currentScrollPos && currentScrollPos > 300 ) {
                document.getElementById( "navbar" ).style.top = "-128px";
            }
            prevScrollpos = currentScrollPos;
        }
    }, [] )
    const goToSearch = () => {
        onChangeSearch( searchValue )
    }
    const SignOUt = () => {
        localStorage.removeItem( 'user' )
        localStorage.removeItem( 'token' )
        setTimeout( () => {
            window.location.href = "/"
        }, 500 );
    }

    const [ itemNum ] = GetAllUserCart();
    const resGetCart = useSelector( state => state.cartReducer.getAllUserCart )



    return (
        <div className="fixed  z-50 w-full top-0 transition-all" id="navbar">
            <Navbar className="mx-auto max-w-full px-4 py-3 rounded-md bg-transparent border-none">
                <div className="container flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900 ">
                    <Link to={ "/" }><Avatar src={ logo } alt="avatar" size="md" variant="rounded" className="bg-gray-800" /></Link>
                    <div className="ml-auto flex gap-1 md:mr-4">
                        <Link to={ "/Cart" } alt="" className="flex items-center  ">
                            <Badge className="lowercase" content={ resGetCart && resGetCart.numOfCartItems ? resGetCart.numOfCartItems : 0 } color="green"  >
                                <IconButton variant="text" className=" text-blue-gray-800 lowercase">
                                    <FaShoppingCart className="h-4 w-4" />
                                </IconButton>
                            </Badge>

                        </Link>
                        { user.name ?
                            <Menu open={ open } handler={ setOpen }>
                                <MenuHandler >
                                    <Button variant="text" className="flex items-center gap-3 bg-transparent text-blue-gray-800" >
                                        { open ? <FaUserAlt className='ml-1' /> : <FaUserAlt className='ml-1' /> } { user.name ? user.name : "login" }
                                    </Button>
                                </MenuHandler>
                                { user.role === "user" ?
                                    <MenuList>
                                        <Link to={ '/user/user-profile' }>
                                            <MenuItem className="flex items-center gap-2">
                                                <FaUserAlt /> profile
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/user/allorders' }>
                                            <MenuItem className="flex items-center gap-2">
                                                <FaBriefcase /> orders
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/user/favorite' }>
                                            <MenuItem className="flex items-center gap-2">
                                                <FaHeart /> Favorites
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/user/address' } >
                                            <MenuItem className="flex items-center gap-2">
                                                <FaAddressCard /> Addresses
                                            </MenuItem>
                                        </Link>
                                        <MenuItem className="flex items-center gap-2 border-t  text-red-400 hover:text-red-400 hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" onClick={ SignOUt }>
                                            <FaPowerOff />Logout
                                        </MenuItem>
                                    </MenuList>
                                    :
                                    <MenuList>

                                        <Link to={ '/admin/allorders' }>
                                            <MenuItem className="flex items-center gap-2">
                                                <FaListOl /> manage of orders
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/admin/allproducts' }>
                                            <MenuItem className="flex items-center gap-2">
                                                <FaCogs /> Mange of products
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/admin/addbrand' } >
                                            <MenuItem className="flex items-center gap-2">
                                                <FaAddressCard /> Add new Brand
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/admin/addCategory' } >
                                            <MenuItem className="flex items-center gap-2">
                                                <FaRegObjectUngroup /> Add new category
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/admin/addSubCategory' } >
                                            <MenuItem className="flex items-center gap-2">
                                                <FaBezierCurve /> Add new sub category
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/admin/addproduct' } >
                                            <MenuItem className="flex items-center gap-2">
                                                <FaTh /> Add new product
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/admin/addcoupon' } >
                                            <MenuItem className="flex items-center gap-2">
                                                <FaMoneyCheckAlt /> Add coupon
                                            </MenuItem>
                                        </Link>
                                        <Link to={ '/admin/favorite' } >
                                            <MenuItem className="flex items-center gap-2">
                                                <FaRegHeart /> Favorite
                                            </MenuItem>
                                        </Link>
                                        <MenuItem className="flex items-center gap-2 border-t text-red-400 hover:text-red-700 hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" onClick={ SignOUt }>
                                            <FaPowerOff />Logout
                                        </MenuItem>
                                    </MenuList>

                                }

                            </Menu>
                            :
                            <Link to={ '/login' } className="">
                                <Button variant="text" className="flex items-center gap-3 bg-transparent text-blue-gray-800" >
                                    <FaUserAlt /> login
                                </Button>
                            </Link>
                        }


                    </div>
                    <div className="relative flex justify-center w-full gap-2 md:w-[300px] ">
                        {/* <Input label="Search"
                            className="" onChange={ onChangeSearch } value={ searchWord }
                            icon={<FaSearch className="hover:text-blue-600" />}/> */}
                        <div className="relative flex w-full max-w-[24rem]">
                            <Input
                                label="search.."
                                className="pr-20"
                                containerProps={ { className: "min-w-0" } }
                                value={ searchValue }
                                onChange={ ( e ) => setSearchValue( e.target.value ) }
                            />
                            <Tooltip content="Search" className="bg-mainGray">
                                <Button onClick={ goToSearch }  size="sm" className="!absolute right-1 top-[6px] rounded flex "><FaSearch /></Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </Navbar >

        </div >
    )
};

export default NavBarLogin;
