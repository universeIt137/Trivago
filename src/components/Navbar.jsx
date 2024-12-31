import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full'>
            <nav className='bg-white '>
                <div className="flex justify-between items-center">
                <div className='font-bold text-3xl'>
                   <NavLink to="/" className="logo">TRAVLOG</NavLink> 
                </div>
                
                
                    <ul>
                        <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li>
                        <NavLink to="/destination" activeClassName="active">Destination</NavLink></li>   
                        <li>
                        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                        </li>
                        <li>
                        <NavLink to="/package" activeClassName="active">Package</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                        </li>                 
                    </ul>
                
                <div>
                <ul>
                        <li>
                            <NavLink to="/login" activeClassName="active">Log In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;