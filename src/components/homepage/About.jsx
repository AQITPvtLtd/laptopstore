"use client";

import React, { useEffect, useRef } from "react";
// import Typed from "typed.js";
import Image from "next/image";

const AboutUs = () => {
    // const typedElement = useRef(null);

    // useEffect(() => {
    //     const typed = new Typed(typedElement.current, {
    //         strings: ["The Laptop Store.."],
    //         typeSpeed: 50,
    //         backSpeed: 30,
    //         loop: true,
    //     });

    //     return () => {
    //         typed.destroy();
    //     };
    // }, []);

    return (
        <div className="bg-[#c1e8ff] -mt-36">
            <div className="lg:grid grid-cols-12 flex flex-col-reverse justify-evenly lg:pl-11 px-5 lg:py-12 py-5">
                <div className="col-span-6 justify-center">
                    <p className="text-center lg:text-left text-3xl font-semibold py-4 dark:text-gray-900">
                        The Laptop Store
                    </p>
                    <p className="text-xl font-medium lg:text-justify text-center dark:text-gray-900">
                        Your trusted destination for high-quality laptops at the best prices. We specialize in providing a wide range of laptops, from budget-friendly options to high-performance machines for professionals and gamers. Our mission is to deliver genuine products with excellent customer support, ensuring a seamless shopping experience. With a commitment to quality, affordability, and customer satisfaction, we strive to be your go-to laptop store. Shop with confidence and discover the perfect laptop for your needs!
                    </p>
                </div>
                <div className="col-span-5 mt-6 lg:pl-20">
                    <Image
                        src="/about/aboutimg.png"
                        className="rounded-2xl"
                        height="1000"
                        width="1000"
                        alt="about-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
