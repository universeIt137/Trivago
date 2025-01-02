import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";


import React from 'react';

const Footer = () => {
return (
<footer className="bg-white text-black py-12">
    <div className="container mx-auto w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand Section */}
        <div>
            <h3 className="text-lg font-bold mb-4">TRAVALIG</h3>
            <p className="text-sm text-black">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, nesciunt soluta ab minus voluptatem et?
            </p>
            <ul className="flex mt-4 gap-4 text-black">
                <li className="cursor-pointer text-pink-400">
                    <FaFacebook className="text-xl" />
                </li>
                <li className="cursor-pointer text-pink-400">
                    <IoLogoTwitter className="text-xl" />
                </li>
                <li className="cursor-pointer text-pink-400">
                    <FaInstagramSquare className="text-xl" />
                </li>
                <li className="cursor-pointer text-pink-400">
                    <FaLinkedin className="text-xl" />
                </li>
                <li className="cursor-pointer text-pink-400">
                    <FaYoutube className="text-xl" />
                </li>
            </ul>
        </div>

        {/* Product Section */}
        <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-pink-400">Features</li>
                <li className="cursor-pointer hover:text-pink-400">Pricing</li>
                <li className="cursor-pointer hover:text-pink-400">Case Studies</li>
                <li className="cursor-pointer hover:text-pink-400">Reviews</li>
                <li className="cursor-pointer hover:text-pink-400">Updates</li>
            </ul>
        </div>

        {/* Company Section */}
        <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-pink-400">About Us</li>
                <li className="cursor-pointer hover:text-pink-400">Careers</li>
                <li className="cursor-pointer hover:text-pink-400">Cultures</li>
                <li className="cursor-pointer hover:text-pink-400">Contact Us</li>
                <li className="cursor-pointer hover:text-pink-400">Blog</li>
            </ul>
        </div>

        {/* Support Section */}
        <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:text-pink-400">Getting Started</li>
                <li className="cursor-pointer hover:text-pink-400">Help Center</li>
                <li className="cursor-pointer hover:text-pink-400">Server Status</li>
                <li className="cursor-pointer hover:text-pink-400">Report a Bug</li>
                <li className="cursor-pointer hover:text-pink-400">Chat Support</li>
            </ul>
        </div>

        {/* Contact Section */}
        <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
                <li>Email: contact@company.com</li>
                <li>Phone: +91 1234567890</li>
                <li>Location: 123 Street, City, Country</li>
            </ul>
        </div>
    </div>

    <div className="text-center text-black text-sm mt-12">
        © {new Date().getFullYear()} Travalig. All Rights Reserved.
    </div>
</footer>
);
};

export default Footer;