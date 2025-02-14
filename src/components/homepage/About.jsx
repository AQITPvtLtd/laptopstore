"use client";

import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

const AboutUs = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedElement.current, {
            strings: ["The Laptop Store.."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="bg-[#c1e8ff] -mt-36">
            <h1 className="text-center text-3xl font-semibold pt-4 font-Poppins">ABOUT US</h1>
            <div className="lg:grid lg:grid-cols-2 justify-center px-9 py-12 flex flex-col-reverse">
                <div>
                    <p className="text-center text-3xl font-semibold py-4">
                        <span ref={typedElement}></span>
                    </p>
                    <p className="text-xl font-medium lg:pr-7 lg:text-justify text-center">
                        Your trusted destination for high-quality laptops at the best prices. We specialize in providing a wide range of laptops, from budget-friendly options to high-performance machines for professionals and gamers. Our mission is to deliver genuine products with excellent customer support, ensuring a seamless shopping experience. With a commitment to quality, affordability, and customer satisfaction, we strive to be your go-to laptop store. Shop with confidence and discover the perfect laptop for your needs!
                    </p>
                </div>
                <Image src="/about/about.png" className="justify-end rounded-2xl" height="550" width="550" alt="about-img" />
            </div>
        </div>
    );
};

export default AboutUs;
