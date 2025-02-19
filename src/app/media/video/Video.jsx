import React from "react";
import Image from "next/image";

const Video = () => {
    return (
        <div className="py-12 mt-20 bg-[#c1e8ff] px-6 sm:px-12 lg:px-20">
            {/* Header Section */}
            <div className="relative w-full max-w-5xl mx-auto mt-10">
                <Image
                    src="/video/video.png"
                    width={1000}
                    height={400}
                    className="w-full lg:h-[250px] h-[150px] object-cover rounded-xl shadow-lg"
                    alt="Video Section"
                />
                <div className="absolute inset-0 opacity-70 rounded-xl"></div>
                <h1 className="text-white font-Poppins  text-center text-5xl font-bold absolute inset-0 flex items-center justify-center">
                    Our Videos
                </h1>
            </div>

            {/* Video & Image Layout */}
            <div className="mt-10 ">

                {/* Right Side Videos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <iframe
                        className="w-full h-64 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                        src="https://www.youtube.com/embed/ybQREclkMhg?si=yRrFUapSSLtfE4bI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                    <iframe
                        className="w-full h-64 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                        src="https://www.youtube.com/embed/yAZc10pzAyQ?si=2BbW3Dz0uYWW8Rv2"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        className="w-full h-64 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                        src="https://www.youtube.com/embed/T345Et5URic?si=KMcxykvcyGiOl7Lf"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

          
        </div>
    );
};

export default Video;
