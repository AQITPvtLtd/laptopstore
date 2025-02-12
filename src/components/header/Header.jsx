"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" id="nav">
        <Link href="/" className="flex items-center space-x-3">
          <Image src="/logo/logo1.png" alt="Logo" width={280} height={230} />
        </Link>
        <div className="flex md:order-2 space-x-3">
          <button
            type="button"
            className="text-white bg-blue-700 flex gap-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            <BiSolidPhoneCall className="text-xl" />
            CALL US
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-5 h-5" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "" : "hidden"
            }`}
        >
          <ul id="part2" className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link href="/" className="py-2 px-3 font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="py-2 px-3 hover:text-blue-700 font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="py-2 px-3 hover:text-blue-700 font-semibold">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="py-2 px-3 hover:text-blue-700 font-semibold">
                Blogs
              </Link>
            </li>
            {/* Dropdown Menu */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center px-3 hover:text-blue-700 font-semibold"
              >
                Media
                <svg
                  className="w-3 h-3 ml-2"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Content */}
              <div
                className={`absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg transition-all duration-200 transform ${isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 hidden"
                  }`}
              >
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 font-semibold">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100 font-semibold">
                      Videos
                    </Link>
                  </li>

                </ul>

              </div>
            </li>
            <li>
              <Link href="/contactus" className="py-2 px-3 hover:text-blue-700 font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Header;
