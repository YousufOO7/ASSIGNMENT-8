import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

const Navbar = props => {
    const location = useLocation();
    const navbarBg = location.pathname === '/' ? 'bg-[#9538E2] text-white max-w-7xl mx-auto pt-5 rounded-t-2xl': 'bg-white text-[#9538E2]';
    const link = <>
        <li><NavLink to="/" ><a>Home</a></NavLink></li>
        <li><NavLink to="/statistics"><a>Statistics</a></NavLink></li>
        <li><NavLink to="/dashboard"><a>Dashboard</a></NavLink></li>
        <li><NavLink to="/about"><a>About</a></NavLink></li>
    </>

    return (
        <div className={`${navbarBg ? 'bg-gray-200': ''}`}>
            <div className={`navbar  ${navbarBg}`}>
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
                            {
                                link
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            link
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='space-x-2 items-center text-center flex'>
                        <div className='flex'>
                            <button className='btn btn-md btn-circle text-xl'><FaShoppingCart></FaShoppingCart></button>
                            <span id='cart-count' className=" w-4 h-4 p-1 text-white font-normal text-sm rounded-full flex justify-center items-center">0</span>
                        </div>
                        <div className='flex'>
                            <button className='btn btn-md btn-circle text-2xl'><CiHeart></CiHeart></button>
                            <span id='heart-count' className=" w-4 h-4 p-1 text-white font-normal text-sm rounded-full flex justify-center items-center">0</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    props: PropTypes
};

export default Navbar;