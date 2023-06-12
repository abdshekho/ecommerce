
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"
import login from "../../images/login.png"
const NavBarLogin = () => {


    return (
        <div className="fixed  z-50 w-full top-0">

            <nav className="bg-black ">
                <div className="container flex h-[60px] items-center lg:w-4/5 md:w-4/5  sm:w-full xs:w-full">
                    <div className="w-1/5 flex justify-center sm:justify-end">
                        <a href="/Cart" alt="">
                        <img src={ cart } className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px] mr-[6px]" alt=""></img>
                        </a>
                        <a href="/login">
                            <img src={ login } className="h-[24px] w-[24px]  sm:h-[30px] sm:w-[30px] mr-[6px] " alt=""></img>
                        </a>
                    </div>
                    <div className="w-3/5">

                        <input type="text" className="w-full h-[35px] md:h-[40px] p-2 placeholder:text-center" placeholder="Search .." />
                    </div>
                    <div className="w-1/8 flex justify-start">
                        <a href="/">

                        <img src={ logo } className="w-[45px] h-[30px]  sm:w-[60px] sm:h-[45px] ml-[10px]" alt=".."></img>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default NavBarLogin;
