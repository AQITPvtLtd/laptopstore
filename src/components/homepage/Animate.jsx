"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const ScrollSection = ({ title, text, img, showButtons }) => {
    const ref = useRef(null);
    
    // useScroll setup
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Text motion (bottom to top)
    const yText = useTransform(scrollYProgress, [0, 1], [100, -200]);
    
    // Background image fades out quickly as text scrolls up
    const opacityImage = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
    const yImage = useTransform(scrollYProgress, [0.8, 1], [0, -200]);

    return (
        <div ref={ref} className="relative min-h-[150vh] overflow-hidden">
            {/* Fixed Background Image */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${img})`, opacity: opacityImage, y: yImage }}
            ></motion.div>

            {/* Content Box */}
            <div className="h-screen flex items-end justify-center relative pb-10">
                <motion.div
                    className="w-full max-w-2xl bg-black bg-opacity-60 text-white text-center p-6 rounded-lg"
                    style={{ y: yText }}
                >
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
                    <p className="text-sm md:text-base mb-6">{text}</p>
                    {showButtons && (
                        <div className="flex justify-center space-x-4">
                            <Link href="/View-All-Services">
                                <button className="px-6 py-3 bg-[#07a496] text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition">
                                    View All Services
                                </button>
                            </Link>
                            <Link href="/contactus">
                                <button className="px-6 py-3 bg-[#04686e] text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <div>
            {/* First Section */}
            <ScrollSection
                title="Is your laptop display or notepad screen broken?"
                text="Reach us if your Laptop LCD / LED screen is broken or if your laptop monitor gets dim automatically."
                img="/services/bgservice.png"
                showButtons={true}
            />

            {/* Second Section */}
            <ScrollSection
                title="Why Choose Us"
                text="We offer a reliable and high-quality collection of laptops to suit every budget and need. With competitive pricing, genuine products, and excellent customer support, we ensure a hassle-free shopping experience."
                img="/contactus/contactbg.png"
                showButtons={false}
            />
        </div>
    );
};

export default Page;
