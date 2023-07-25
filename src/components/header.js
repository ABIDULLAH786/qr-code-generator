import React, { useLayoutEffect, useState } from "react";
import {
    FaAddressBook,
    FaBars,
    FaBlogger,
    FaBriefcase,
    FaFileAlt,
    FaHome,
    FaMoon,
    FaRegAddressBook,
    FaSun,
    FaUserAlt,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

function Header() {
    return (
        <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111] mb-2">
            <div className="flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent ">
                <div className="flex justify-between w-full items-center space-x-4 lg:my-3 my-2">
                    {/* website logo  */}
                    <a className="text-3xl font-semibold flex items-center justify-start" href="/">
                        <img className="w-10" src="/logo192.png" alt="logo" /> QR Generator
                    </a>
                   
                </div>
            </div>

        

           
        </header>
    );
}

export default Header;
