import React from 'react';
import serviceData from '../data';
import Image from 'next/image';

const Detailed = ({ id }) => {
    const obj = serviceData.find((item) => item.id === id);

    if (!obj) {
        return <p className="text-red-500">Service not found.</p>;
    }

    return (
        <div className="grid lg:grid-cols-3 gap-4 items-center mt-[100px]">
            <div className="relative overflow-hidden rounded-lg transform transition duration-500 hover:scale-105">
                {obj.img && (
                    <Image
                        src={obj.img} // Removed template literals
                        alt={obj.name}
                        width={1000}
                        height={1000}
                        className="rounded-lg"
                    />
                )}
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center bg-white p-6 rounded-lg shadow-inner overflow-hidden">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{obj.title}</h1>
                {console.log(obj.title)}
                <p className="text-gray-700 text-lg">{obj.content}</p>
            </div>
        </div>
    );
};

export default Detailed;
