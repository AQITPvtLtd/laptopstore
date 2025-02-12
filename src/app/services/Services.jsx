import React from 'react';
import serviceData from './data';
import Link from 'next/link';

const Services = () => {

    return (
        <div className="py-12 px-6 bg-[#c1e8ff]">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {serviceData.map((service) => (
                    <Link href={`/services/${service.id}`}>
                        <div
                            key={service.id}
                            className={`group rounded-2xl shadow-md p-6 text-center cursor-pointer transition-all duration-300 
                        ${service.id % 2 === 0
                                    ? 'bg-white hover:bg-blue-600 hover:text-white'
                                    : 'bg-blue-600 text-white hover:bg-white hover:text-black'}`}
                        >
                            <div className={`flex items-center justify-center mb-4 
                            ${service.id % 2 === 0
                                    ? 'text-blue-600 group-hover:text-white'
                                    : 'text-white group-hover:text-black'}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className={`text-gray-600 line-clamp-3 ${service.id % 2 !== 0 ? 'text-white group-hover:text-black' : 'group-hover:text-white'}`}>
                                {service.content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default Services;
