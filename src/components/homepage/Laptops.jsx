import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

const Laptops = () => {
    return (
        <div className=''>
            <div className='bg-[#c1e8ff] relative z-10 pb-24'>
                <h1 className='text-center font-semibold md:text-3xl text-lg mt-3 px-2 py-10 font-Poppins dark:text-gray-900'>
                    We Service All Makes of Laptops
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 px-5 pb-5">
                    {['hp', 'acer', 'apple', 'asus', 'dell'].map((brand, index) => (
                        <Image
                            key={index}
                            src={`/laptops/${brand}.png`}
                            height={300}
                            width={300}
                            alt={`${brand}-laptop-img`}
                            className='border-2 border-black hover:border-[#2cff05] hover:shadow-inner hover:rounded-2xl hover:duration-500 w-full h-auto object-contain'
                        />
                    ))}
                </div>
            </div>

            {/* Information Section */}
            <div className="bg-[#0b2b5e] text-white z-50 py-14 px-8 rounded-tl-[50px] rounded-br-[50px] flex flex-col md:flex-row items-center justify-between mx-5 sm:mx-10 md:mx-20 lg:mx-60 relative -mt-20">
                {/* Half Background Effect */}
                <div className="absolute inset-0 bg-[#0b2b5e] -z-10 w-full h-1/2 top-0 rounded-tl-[50px] rounded-br-[50px]" />

                {/* Phone Section */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <BiSolidPhoneCall className="text-4xl" />
                    <div>
                        <p className="text-sm font-semibold">CALL US TODAY</p>
                        <Link href="tel:+917982233548" className="text-lg font-bold">
                            +91 7982233548
                        </Link>
                    </div>
                </div>

                {/* Email Section */}
                <div className="flex items-center space-x-4">
                    <IoIosMail className="text-4xl" />
                    <div>
                        <p className="text-sm font-semibold">WRITE AT ANY TIME</p>
                        <Link href="mailto:laptophub0723@gmail.com" className="text-lg font-bold">
                            laptophub0723@gmail.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Laptops;
