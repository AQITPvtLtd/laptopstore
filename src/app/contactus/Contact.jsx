"use client";

import { form } from '@/services/contact';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Image from 'next/image';

const Contact = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        Fname: "",
        Phone: "",
        Email: "",
        Location: "",
        Message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await form(formData);
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "Thank you for reaching out!",
                    icon: "success",
                });
                router.push("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            Swal.fire({
                icon: "error",
                title: "Submission Failed",
                text: "Please try again later.",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-10 bg-cover bg-center ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full items-center mt-24">

                <div className="w-full lg:block hidden">
                    <Image
                        src="/contactus/contactbg.png"
                        width={1000}
                        height={400}
                        className="w-full lg:h-[400px] object-cover rounded-xl"
                        alt="Contact Background"
                    />
                </div>
                <div className="w-full bg-[#c1e8ff] p-6 shadow-lg rounded-lg">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold text-gray-700 text-center font-Poppins">Submit Your Query</h3>
                        <div>
                            <label className="block text-gray-600" htmlFor="Fname">Full Name <span className="text-red-500">*</span></label>
                            <input type="text" id="Fname" name="Fname" className="w-full border border-gray-300  px-3 py-2 focus:outline-none focus:border-blue-500 rounded-2xl" placeholder="Enter Your Full Name" required value={formData.Fname} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-600" htmlFor="Phone">Phone Number <span className="text-red-500">*</span></label>
                            <input type="tel" id="Phone" name="Phone" className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Your Phone Number" required value={formData.Phone} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-600" htmlFor="Email">Email <span className="text-red-500">*</span></label>
                            <input type="email" id="Email" name="Email" className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Your Email Address" required value={formData.Email} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-600" htmlFor="Location">Location <span className="text-red-500">*</span></label>
                            <input type="text" id="Location" name="Location" className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Your Location" required value={formData.Location} onChange={handleChange} />
                        </div>
                        <div>
                            <label className="block text-gray-600" htmlFor="Message">Write Problem English / Hindi <span className="text-red-500">*</span></label>
                            <textarea id="Message" name="Message" className="w-full border border-gray-300 rounded-2xl px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Describe Health Problem..." required value={formData.Message} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl hover:bg-blue-600 transition duration-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;