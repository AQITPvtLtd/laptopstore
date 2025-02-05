import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div className='bg-[#c1e8ff] mt-5'>
            <h1 className='text-center text-3xl font-semibold pt-4'>ABOUT US</h1>
            <div className='grid grid-cols-2 justify-center px-9 py-12'>
                <div>
                    <p className='text-3xl font-semibold'>What is Laptop Store</p>
                    <p className='text-xl font-medium pr-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae facere amet suscipit veniam quibusdam odio dicta recusandae fugiat ea commodi obcaecati dolorum porro optio nesciunt totam sapiente, quo ipsum? Omnis optio iusto voluptas unde. Itaque sequi illum suscipit pariatur quos nisi laudantium unde fuga in velit, voluptates asperiores eos quo! Non perferendis ex assumenda aperiam suscipit odit porro magnam, natus illum soluta quo quibusdam ipsa laudantium corporis distinctio laboriosam quam?</p>
                </div>
                <Image src="/about/about.png" className='justify-end' height="550" width="550" alt='about-img' />
            </div>
        </div>
    )
}

export default About