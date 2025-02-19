"use client";
import React from "react";
import Image from "next/image";
import Contact from "@/app/contactus/Contact";
// import Link from "next/link";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="dark:bg-white">
      <h1 className="text-center font-bold text-4xl pt-7 font-Poppins tracking-wide dark:text-gray-900">OUR LAPTOP SERVICES</h1>
      <p className="text-center font-semibold text-2xl font-Poppins text-gray-700">
        The Laptop Store welcomes you to the world of quality services
      </p>


      <div className="lg:grid lg:grid-cols-12 mt-10 pb-5">

        <div className="col-span-7">
          <div className="grid grid-cols-2 gap-4 pb-6 lg:px-16 px-5">
            {["img1.png", "img2.png", "img3.png", "img4.png", "img5.png", "newssd.png"].map((img, index) => (
              <div key={index} className="bg-[#c1e8ff] rounded-lg p-4 transition-transform transform hover:scale-105 lg:px-24">
                <Image
                  src={`/services/${img}`}
                  height={150}
                  width={150}
                  alt="service-img"
                  className="rounded-lg w-full h-auto mb-2"
                />
                <p className="font-semibold text-sm sm:text-base lg:text-lg font-Poppins text-center dark:text-gray-900">
                  {["Screen Replacement", "Battery Replacement", "Keyboard Replacement", "Fan Replacement", "Regular Maintenance", "Laptop Upgrades (RAM & SSD)"][index]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4">
          <div className="px-10">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;