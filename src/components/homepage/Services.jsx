"use client";
import React from "react";
import Image from "next/image";
// import Link from "next/link";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mt-10 font-[Poppins] tracking-wide">OUR LAPTOP SERVICES</h1>
      <p className="text-center font-semibold text-2xl font-[Montserrat] text-gray-700">
        The Laptop Store welcomes you to the world of quality services
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-10 lg:px-14 px-5 gap-4 pb-6">
        {["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"].map((img, index) => (
          <div key={index} className="px-4 text-center">
            <Image
              src={`/services/${img}`}
              height={200}
              width={200}
              alt="service-img"
              className="bg-[#c1e8ff] px-2 rounded-lg shadow-md w-full sm:w-auto"
            />
            <p className="bg-[#c1e8ff] font-semibold text-sm sm:text-base lg:text-lg font-[Poppins] py-2 rounded-md">
              {["Screen Replacement", "Battery Replacement", "Keyboard Replacement", "Fan Replacement", "Regular Maintenance"][index]}
            </p>
          </div>
        ))}
      </div>

      {/* {[{ data: "data", delay: 0, direction: 100 }, { data: "data1", delay: 0.5, direction: -100 }].map(({ data, delay, direction }, index) => {
        const content = data === "data"
          ? {
              name: "Is your laptop display or notepad screen broken? Reach us if your Laptop LCD /LED screen is broken or if your laptop monitor gets dim automatically.",
              img: "/services/bgservice.png",
              url: "/View-All-Services",
              showButtons: true,
            }
          : {
              name: "<h1 class='text-4xl md:text-6xl font-bold mb-4 font-[Poppins] text-yellow-300'>Why Choose Us</h1> We offer a reliable and high-quality collection of laptops to suit every budget and need. With competitive pricing, genuine products, and excellent customer support, we ensure a hassle-free shopping experience.",
              img: "/services/whychooseimg.png",
              showButtons: false,
            };

        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.2,
        });

        return (
          <div
            key={index}
            className="bg-cover bg-center bg-fixed relative flex items-center justify-center text-white"
            style={{
              backgroundImage: `url(${content.img})`,
              minHeight: "800px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <motion.div
              ref={ref}
              initial={{ x: direction, opacity: 0 }}
              animate={inView ? { x: 1, opacity: 1 } : { x: direction, opacity: 0 }}
              transition={{ duration: 1, delay }}
              className="relative z-10 text-center p-8 max-w-3xl"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[Poppins]" dangerouslySetInnerHTML={{ __html: content.name }}></h1>
              {content.showButtons && (
                <div className="flex justify-center space-x-4">
                  <Link href={content.url}>
                    <button className="px-6 py-3 bg-[#07a496] text-white font-bold text-lg font-[Montserrat] rounded-lg shadow-lg hover:scale-105 transition">
                      View All Services
                    </button>
                  </Link>
                  <Link href="/contactus">
                    <button className="px-6 py-3 bg-[#04686e] text-white font-bold text-lg font-[Montserrat] rounded-lg shadow-lg hover:scale-105 transition">
                      Contact Us
                    </button>
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        );
      })} */}
    </div>
  );
};

export default Services;