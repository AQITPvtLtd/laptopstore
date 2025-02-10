import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=" py-10 px-6 mt-11">
            <div className="mb-6">
                <Image src="/logo/logo1.png" width={250} height={350} alt="logo-img" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                {/* About Us */}
                <div>
                    <h2 className="font-semibold text-lg mb-2">About Us</h2>
                    <p className="text-sm leading-relaxed">
                        Experience top-tier refurbished laptops from leading brands at unbeatable prices.
                        Elevate your computing with The Laptop Store.
                    </p>
                </div>

                {/* Quick Links */}
                <div className='lg:ml-32'>
                    <h2 className="font-semibold text-lg mb-2">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Blogs</Link></li>
                        <li><Link href="/">Services</Link></li>
                        <li><Link href="/">Contact</Link></li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <span>
                    <h2 className="font-semibold text-lg mb-2">Address</h2>
                    <p className="text-sm leading-relaxed">
                        G 3 Deep Building, Ground Floor, Wazipur Commercial Complex,
                        Near Shalimar Bagh Metro Station, Gate No. 5, Delhi, 110052
                    </p></span>
                    <span>
                    <h2 className="font-semibold text-lg mb-2">Email Address</h2>
                    <p className="text-sm leading-relaxed">
                    laptophub0723@gmail.com
                    </p>
                    </span>
                </div>
            </div>

            <div className="flex lg:gap-6 gap-3 py-4 ">
                <Link
                    href="/"
                    target="__blank"
                    className="bg-blue-600 p-4 rounded-full shadow-lg shadow-blue-400"
                >
                    {" "}
                    <FaFacebookF className="text-lg text-white" />{" "}
                </Link>

                <Link
                    href="/"
                    target="__blank"
                    className="bg-pink-500 p-4 rounded-full shadow-lg shadow-pink-400"
                >
                    <FaInstagram className="text-lg text-white" />
                </Link>

                <Link
                    href="/"
                    target="__blank"
                    className="bg-blue-700 p-4 rounded-full shadow-lg shadow-blue-500"
                >
                    <FaLinkedinIn className="text-lg text-white" />
                </Link>

                <Link
                    href="/"
                    target="__blank"
                    className="bg-blue-500 p-4 rounded-full shadow-lg shadow-blue-400"
                >
                    <FaXTwitter className="text-lg text-white" />
                </Link>

                <Link
                    href="/"
                    target="__blank"
                    className="bg-red-600 p-4 rounded-full shadow-lg shadow-red-400"
                >
                    <FaYoutube className="text-lg text-white" />
                </Link>
            </div>
        </div>
    );
};

export default Footer;
