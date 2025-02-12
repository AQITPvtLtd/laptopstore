"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Why = () => {
  const ref = useRef(null);

  // useScroll ka target set karna
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Text ka motion transform (neeche se upar move hoga)
  const yText = useTransform(scrollYProgress, [0, 1], [300, -200]);

  // Background image opacity control (jab text pura scroll ho jaye, image chali jaye)
  const bgOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Console me scroll progress print karne ke liye
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      console.log("Scroll Progress:", latest);
    });
  }, [scrollYProgress]);

  return (
    <div ref={ref} className="relative max-h-[200vh] overflow-hidden">
      {/* Fixed Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(/contactus/contactbg.png)",
          opacity: bgOpacity,
          willChange: "opacity"
        }}
      ></motion.div>

      {/* Text Box (Motion ke sath) */}
      <div className="h-screen flex items-end justify-center relative pb-16">
        <motion.div
          className="w-full max-w-3xl bg-black bg-opacity-50 text-white text-center p-8 rounded-lg"
          style={{ y: yText, willChange: "transform" }}
        >
          <h1 className="text-3xl font-bold mb-4">Why Choose Us</h1>
          <p>
            We offer a reliable and high-quality collection of laptops to suit every budget and need. With competitive pricing, genuine products, and excellent customer support, we ensure a hassle-free shopping experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Why;

