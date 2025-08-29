import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full ">
            <div className="flex justify-between items-center p-4 max-w-[90%] mx-auto">

                <h2 className="font-bold text-3xl cursor-pointer">
                    LOGI <span className="text-orange-600">LAND</span>
                </h2>

                <ul className="hidden md:flex gap-10">
                    <Link to="/" className="hover:text-orange-600 font-medium cursor-pointer">Home</Link>
                    <Link to="/about" className="hover:text-orange-600 font-medium cursor-pointer">About Us</Link>
                    <Link to="/service" className="hover:text-orange-600 font-medium cursor-pointer">Service</Link>                    <Link to="/blogs" className="hover:text-orange-600 font-medium cursor-pointer">Blog</Link>
                    <Link to="/contact" className="hover:text-orange-600 font-medium cursor-pointer">Contact Us</Link>
                </ul>

                <Link to="/trackorder" className="hidden md:block cursor-pointer bg-orange-600 border border-transparent hover:border-orange-600 hover:bg-white hover:text-orange-600 text-white text-lg font-medium px-4 py-2 rounded transition duration-300">
                    Track Order
                </Link>


                <div className="md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center gap-5 py-5">
                        <Link to="/" className="hover:text-orange-600 font-medium cursor-pointer">Home</Link>
                        <Link to="/about" className="hover:text-orange-600 font-medium cursor-pointer">About Us</Link>
                        <Link to="/service" className="hover:text-orange-600 font-medium cursor-pointer">Service</Link>
                        <Link to="/blogs" className="hover:text-orange-600 font-medium cursor-pointer">Blog</Link>
                        <Link to="/contact" className="hover:text-orange-600 font-medium cursor-pointer">Contact Us</Link>

                        <Link
                            to="/trackorder"
                            className="bg-orange-600 hover:bg-white border hover:border-orange-600 hover:text-orange-600 text-white cursor-pointer text-lg font-medium px-4 py-2 rounded transition duration-300"
                        >
                            Track Order
                        </Link>

                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
