"use client";

import { form } from '@/services/contact';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

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
        <div className="h-screen lg:mt-16 flex justify-end items-end bg-cover bg-center px-4 sm:px-8 pb-10" style={{ backgroundImage: "url(/contactus/contactbg.png)" }}>
            <div className="w-full max-w-lg">
                <form className=" px-6 py-4 shadow-lg rounded-lg" onSubmit={handleSubmit}>
                    <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Submit Your Query</h3>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1" htmlFor="Fname">Full Name <span className="text-red-500">*</span></label>
                        <input type="text" id="Fname" name="Fname" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Your Full Name" required value={formData.Fname} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1" htmlFor="Phone">Phone Number <span className="text-red-500">*</span></label>
                        <input type="tel" id="Phone" name="Phone" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Your Phone Number" required value={formData.Phone} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1" htmlFor="Email">Email <span className="text-red-500">*</span></label>
                        <input type="email" id="Email" name="Email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Your Email Address" required value={formData.Email} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1" htmlFor="Location">Location <span className="text-red-500">*</span></label>
                        <input type="text" id="Location" name="Location" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Your Location" required value={formData.Location} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-1" htmlFor="Message">Write Problem English / Hindi <span className="text-red-500">*</span></label>
                        <textarea id="Message" name="Message" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Describe Health Problem..." required value={formData.Message} onChange={handleChange}></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full text-black font-semibold py-2 px-4 rounded hover:bg-[#7ccbf8] transition duration-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>


            
        </div>
    );
};

export default Contact;
