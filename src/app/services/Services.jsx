import React from 'react';
import serviceData from './data';
import Link from 'next/link';
const Services = () => {

    return (
        <div className='lg:mt-[125px] mt-[155px]'>

            <div className="relative w-full max-w-5xl mx-auto rounded-2xl px-5">
                <div className='py-9 rounded-2xl shadow-slate-800 shadow-custom'>
                  
                </div>
                <div className="absolute inset-0 opacity-70 rounded-xl"></div>
                <h1 className="text-black font-Poppins text-center text-3xl font-bold absolute inset-0 flex items-center justify-center">
                    Our Services
                </h1>
            </div>

            <div className="px-6 bg-[#c1e8ff] py-20 mt-10">

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                    {serviceData.map((service) => (
                        <Link href={`/services/${service.id}`}>
                            <div
                                key={service.id}
                                className={`group rounded-2xl shadow-md p-6 text-center cursor-pointer transition-all duration-300 
                        ${service.id % 2 === 0
                                        ? 'bg-white hover:bg-blue-600 hover:text-white dark:text-gray-900'
                                        : 'bg-blue-600 text-white hover:bg-white hover:text-black'}`}
                            >
                                <div className={`flex items-center justify-center mb-4 
                            ${service.id % 2 === 0
                                        ? 'text-blue-600 group-hover:text-white'
                                        : 'text-white group-hover:text-black'}`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 font-pacifico ">{service.title}</h3>
                                <p className={`text-gray-600 line-clamp-3 ${service.id % 2 !== 0 ? 'text-white group-hover:text-black ' : 'group-hover:text-white'}`}>
                                    {service.content}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Services;
