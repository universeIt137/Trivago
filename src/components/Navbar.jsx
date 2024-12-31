import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="bg-white border-2 border-black px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#6C51C2] to-[#FA87B7]">
            <NavLink to="/" className="logo">
              TRAVLOG
            </NavLink>
          </div>

          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" activeClassName="active">
                Destination
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" activeClassName="active">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/package" activeClassName="active">
                Package
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>

          <div>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
              <li>
                <NavLink to="/login" activeClassName="active">
                  Log In
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className="bg-blue-500 px-2 py-1 rounded-2xl"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
