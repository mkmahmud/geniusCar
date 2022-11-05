import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { AuthContext } from '../../Context/AuthContext/AuthProvider';

const Navbar = () => {

    const {user} = useContext(AuthContext)
   

    const menus = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Services</Link></li>
        <li><Link to='/'>Blog</Link></li>
        {
            user?.email ? <li><Link to='/orders'>Orders</Link></li> : ''
        }
        <li><Link to='/'>Contact</Link></li>
        <li><Link to='/login'>Log In</Link></li>
        <li><Link to='/signup'>Sign Up</Link></li>
    </>
    return (
        <div className="navbar h-20 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        menus
                    }
                </ul>
            </div>
            <div className="navbar-end">

                <button className="btn btn-outline btn-secondary">Appionments</button>
            </div>
        </div>
    );
};

export default Navbar;