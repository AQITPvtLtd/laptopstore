import React from 'react';
import Contact from './Contact';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

export const metadata = {
    title: "The Laptop Store - Contact Us",
};

const Page = () => {
    return (
        <div className="container mx-auto px-4 lg:mt-[125px] mt-[95px]">

            <div className="relative w-full max-w-5xl mx-auto rounded-2xl">
                <div className='py-9 rounded-2xl shadow-slate-800 shadow-custom'>

                </div>
                <div className="absolute inset-0 opacity-70 rounded-xl"></div>
                <h1 className="text-black font-Poppins text-center text-3xl font-bold absolute inset-0 flex items-center justify-center">
                    Contact Us
                </h1>
            </div>


            <div className='lg:grid lg:grid-cols-12 gap-10 items-center mt-9'>
                <div className="col-span-7 hidden lg:block w-full ">
                    <Image
                        src="/contactus/contactbg.png"
                        width={1000}
                        height={400}
                        className="w-full h-auto lg:h-[400px] object-cover rounded-xl"
                        alt="Contact Background"
                    />
                </div>
                <div className='col-span-5'>
                    <Contact /></div>
            </div>

            <div className="bg-gray-100 py-10 px-5 lg:px-20 mt-10">
                <h1 className="text-center text-3xl md:text-4xl font-Poppins font-bold mb-8 text-gray-800">
                    Contact Information
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Address */}
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                        <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-Poppins">Our Address</h2>
                        <Link href="https://g.co/kgs/QkeEBzr" className="text-gray-600 hover:text-blue-600">
                            G 3 Deep Building, Ground Floor, Wazirpur Commercial Complex, Near Shalimar Bagh Metro Station, Gate No. 5, Delhi, 110052
                        </Link>
                    </div>

                    {/* Phone */}
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                        <FaPhoneAlt className="text-4xl text-green-500 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-Poppins">Phone Number</h2>
                        <Link href="tel:09560438879" className="text-gray-600 hover:text-green-600">
                            +91 9560438879
                        </Link>
                    </div>

                    {/* Email */}
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                        <FaEnvelope className="text-4xl text-red-500 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-Poppins">Email Address</h2>
                        <Link href="mailto:laptophub0723@gmail.com" className="text-gray-600 hover:text-red-600">
                            laptophub0723@gmail.com
                        </Link>
                    </div>

                    {/* Opening Hours */}
                    <div className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center">
                        <FaClock className="text-4xl text-purple-500 mb-4" />
                        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-Poppins">Opening Hours</h2>
                        <span className="text-gray-600">11:00 AM – 8:00 PM</span>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-4 lg:px-20">
                <div className="map-container w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.586649918314!2d77.16366127451289!3d28.702008980924024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03497a36cc3f%3A0x991ffdef55f02ec7!2sThe%20Laptop%20Store%20%7C%20Best%20Refurbished%20Laptops%20in%20Delhi%20%7C%20Shalimar%20Bagh%20%7C%20Wazirpur%20%7C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1739345430409!5m2!1sen!2sin"
                        width="100%"
                        height="350"
                        className='rounded-2xl w-full'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Page;
