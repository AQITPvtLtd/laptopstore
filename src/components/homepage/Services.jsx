import React from 'react'
import Image from 'next/image'
const Services = () => {
    return (
        <div>

            <h1 className='text-center font-semibold text-3xl mt-10'>OUR LAPTOP SERVICES</h1>
            <p className='text-center font-semibold text-xl'>The Laptop Store welcomes you to the world of quality services</p>
            <div className='grid grid-cols-5'>
                <div className='px-4'>
                    <Image src="/services/img1.png" height="250" width="250" alt='service-img' className='bg-[#c1e8ff] p-4' />
                    <p>Screen Replacement</p>
                </div>
                <div className='px-4'>
                    <Image src="/services/img2.png" height="250" width="250" alt='service-img' className='bg-[#c1e8ff]' />
                </div>
                <div className='px-4 '>
                    <Image src="/services/img3.png" height="250" width="250" alt='service-img' className='bg-[#c1e8ff]' />
                </div>
                <div className='px-4 '><Image src="/services/img4.png" height="250" width="250" alt='service-img' className='bg-[#c1e8ff]' /></div>
                <div className='px-4 '><Image src="/services/img5.png" height="250" width="250" alt='service-img' className='bg-[#c1e8ff]' /></div>
            </div>
        </div>
    )
}

export default Services