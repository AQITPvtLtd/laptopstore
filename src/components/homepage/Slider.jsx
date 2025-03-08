"use client";

import React, { useState, useEffect } from "react";

const Slider = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        // Function to check screen size
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Large devices (lg breakpoint)
        };

        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    return (
        <div className="w-full -mt-20 sm:-mt-28 md:-mt-5">
            {/* First Slider Image - Responsive */}
            <div
                className="w-full flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/slider/slider1.png")',
                    backgroundSize: isLargeScreen ? "cover" : "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: isLargeScreen ? "110vh" : "auto", // Large screens par full height, small par auto adjust
                    height: isLargeScreen ? "100vh" : "500px",
                }}
            ></div>

            {/* Second Slider Image - Only for Large Devices */}
            {isLargeScreen && (
                <div
                    className="bg-cover bg-center bg-fixed w-full h-screen md:h-[80vh] lg:h-[90vh] flex items-center justify-center"
                    style={{
                        backgroundImage: 'url("/slider/slider3.png")',
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            )}
        </div>
    );
};

export default Slider;
