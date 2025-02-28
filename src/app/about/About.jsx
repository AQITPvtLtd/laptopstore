"use client";

import AboutUs from '@/components/homepage/About'
import React from "react";
// import Typed from "typed.js";
import Image from 'next/image'

const About = () => {
    // const typedElementMission = useRef(null);
    // const typedElementVision = useRef(null);

    // useEffect(() => {
    //     const typedMission = new Typed(typedElementMission.current, {
    //         strings: ["Our Mission.."],
    //         typeSpeed: 50,
    //         backSpeed: 30,
    //         loop: true,
    //     });

    //     const typedVision = new Typed(typedElementVision.current, {
    //         strings: ["Our Vision.."],
    //         typeSpeed: 50,
    //         backSpeed: 30,
    //         loop: true,
    //     });

    //     return () => {
    //         typedMission.destroy();
    //         typedVision.destroy();
    //     };
    // }, []);

    return (
        <div className='lg:mt-[125px] mt-[95px] px-4 sm:px-8'>
            <div className="relative w-full max-w-5xl mx-auto rounded-2xl">
                <div className='py-9 rounded-2xl shadow-slate-800 shadow-custom'>
                   
                </div>
                <div className="absolute inset-0 opacity-70 rounded-xl"></div>
                <h1 className="text-black font-Poppins text-center text-3xl font-bold absolute inset-0 flex items-center justify-center">
                    About Us
                </h1>
            </div>

            <div className='mt-44'>
                <AboutUs />
            </div>

            {/* Mission Section */}
            <div className="bg-[#c1e8ff] mt-8 rounded-lg p-6">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <Image
                            src="/about/mission.jpg"
                            className="rounded-2xl shadow-lg"
                            height={550}
                            width={550}
                            alt="mission-img"
                        />
                    </div>
                    <div>
                        <h1 className="text-center text-3xl font-semibold py-4 dark:text-gray-900">
                            <h1>Our Mission</h1>
                        </h1>
                        <p className="text-xl font-medium lg:text-justify text-center dark:text-gray-900">
                            Our mission is to provide customers with the best quality laptops at competitive prices, backed by excellent customer service and hassle-free shopping experiences. We aim to offer a wide selection of laptops to suit every need, whether it's for work, study, gaming, or entertainment. We are committed to helping our customers find the perfect device that meets their specific requirements, ensuring they get the most value for their investment.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="bg-[#c1e8ff] mt-8 rounded-lg p-6">
                <div className="lg:grid lg:grid-cols-2 gap-8 items-center flex flex-col-reverse">
                    <div>
                        <h1 className="text-center text-3xl font-semibold py-4 dark:text-gray-900">
                           Our Vision
                        </h1>
                        <p className="text-xl font-medium lg:text-justify text-center dark:text-gray-900">
                            Our vision is to be the leading laptop retailer, recognized for offering genuine products, unbeatable prices, and exceptional customer support. We strive to empower individuals and businesses by providing access to the latest technology that enhances productivity, creativity, and enjoyment. Our goal is to build lasting relationships with our customers and be their trusted partner for all their computing needs.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/about/vision.avif"
                            className="rounded-2xl shadow-lg"
                            height={350}
                            width={350}
                            alt="vision-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
