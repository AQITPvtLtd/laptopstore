import React from 'react';

const Slider = () => {
    return (
        <div className="w-full">
            {/* First Slider Image */}
            <div
                className="bg-cover bg-center bg-fixed w-full h-screen md:h-[80vh] lg:h-[100vh] flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/slider/slider1.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            {/* Second Slider Image */}
            <div
                className="bg-cover bg-center bg-fixed w-full h-screen md:h-[80vh] lg:h-[90vh] flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/slider/slider2.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>
        </div>
    );
};

export default Slider;
