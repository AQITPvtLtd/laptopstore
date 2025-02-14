import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { IoCall } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className="pb-6 py-5 px-8 mt-11 bg-gradient-to-b from-gray-900 to-black text-white relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url(logo/asdf.avif)" }}>
            {/* <div className="mb-8 flex justify-center md:justify-start">
                <Image src="/logo/asdf.png" width={200} height={100} alt="logo-img" className="rounded-lg shadow-lg" />
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-center md:text-left">
                {/* About Us */}
                <div>
                    <h2 className="font-semibold text-xl mb-3 text-blue-400">About Us</h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Experience top-tier refurbished laptops from leading brands at unbeatable prices.
                        Elevate your computing with The Laptop Store.
                    </p>
                    <div className="flex justify-center md:justify-start gap-5 py-8">
                        <Link href="/" target="_blank" className="bg-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300">
                            <FaFacebookF className="text-xl text-white" />
                        </Link>
                        <Link href="/" target="_blank" className="bg-pink-500 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300">
                            <FaInstagram className="text-xl text-white" />
                        </Link>
                        <Link href="/" target="_blank" className="bg-blue-700 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300">
                            <FaLinkedinIn className="text-xl text-white" />
                        </Link>
                        <Link href="/" target="_blank" className="bg-blue-500 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300">
                            <FaXTwitter className="text-xl text-white" />
                        </Link>
                        <Link href="/" target="_blank" className="bg-red-600 p-3 rounded-full shadow-lg hover:scale-110 transition duration-300">
                            <FaYoutube className="text-xl text-white" />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:ml-10 lg:ml-24">
                    <h2 className="font-semibold text-xl mb-3 text-blue-400">Quick Links</h2>
                    <ul className="space-y-2 text-lg lg:list-disc">
                        <li><Link href="/" className="hover:text-blue-300 transition">About</Link></li>
                        <li><Link href="/" className="hover:text-blue-300 transition">Blogs</Link></li>
                        <li><Link href="/" className="hover:text-blue-300 transition">Services</Link></li>
                        <li><Link href="/" className="hover:text-blue-300 transition">Contact</Link></li>
                    </ul>
                </div>

                {/* Address */}
                <div>
                    <div>
                        <h2 className="font-semibold text-xl mb-3 text-blue-400">Address</h2>
                        <div className="flex gap-2 text-gray-300 sm:justify-center md:justify-start">
                            <FaLocationDot className="text-blue-400 mt-1" />
                            <p>
                                G 3 Deep Building, Wazipur Commercial Complex, Delhi, 110052
                            </p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-semibold text-xl mb-2 text-blue-400">Email</h2>
                        <Link href="mailto:laptophub0723@gmail.com" className="flex sm:justify-center md:justify-start gap-2 text-gray-300 hover:text-blue-300 transition">
                            <MdEmail className="text-blue-400 mt-1" /> laptophub0723@gmail.com
                        </Link>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-semibold text-xl mb-2 text-blue-400">Phone</h2>
                        <Link href="tel:09560438879" className="flex sm:justify-center md:justify-start gap-2 text-gray-300 hover:text-blue-300 transition">
                            <IoCall className="text-blue-400 mt-1" /> +91 9560438879
                        </Link>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5'>
                <Link href="https://tekbooster.com/" target='__blank'>
                    Design & Develop by TekBooster (Digital Marketing Company)</Link>
            </div>
        </div>
    );
};

export default Footer;
