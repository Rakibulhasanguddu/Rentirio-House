import { PiArrowUpRightBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

import { PiShoppingCartLight } from "react-icons/pi";

const Nav = () => {
    const link = <>
        <li><a>Home</a></li>
        <li><a>Service</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Blogs</a></li>
        <li><a>Contact Us</a></li>
    </>
    return (
    <div className="bg-[#dae0db]">
            <div className="container mx-auto bg-[#dae0db]">
            <div className="navbar bg-[#dae0db] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                 <a className="lg:btn btn-ghost "><span className="text-xl font-bold">Rinterio</span></a>
                            {link}
                           
                        </ul>
                    </div>
                  <div className="">
                  <a className="btn btn-ghost "><span className="w-[30px] h-[30px] p-2 rounded-xl bg-lime-500"><PiArrowUpRightBold /></span> <span className="text-3xl font-bold ">Rinterio</span></a>
                  </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                        
                    </ul>
                </div>
                <div className="lg:navbar-end lg:gap-5">

                    <div className=" w-[35px] h-[35px] p-2 bg-white rounded-xl">
                        <IoSearchOutline />
                    </div>
                    <div className="w-[35px] h-[35px] p-2 bg-white  rounded-xl">
                        <PiShoppingCartLight />
                    </div>
                    <a className="btn bg-[#ABEF5F] text-lg font-bold hover:bg-orange-400 sm:hidden">Book Consult <span className="w-[19px] h-[20px] rounded-xl bg-white"><PiArrowUpRightBold /></span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Nav;