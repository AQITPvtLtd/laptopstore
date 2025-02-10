"use client";

import React, { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

const faqs = [
    { question: "What is your return policy?", answer: "We offer a 30-day return policy. Please visit our return policy page for details." },
    { question: "Do refurbished laptops come with a warranty?", answer: "Yes, all our refurbished laptops come with a warranty. Warranty periods vary by model." },
    { question: "Can I visit your store to check the laptops in person?", answer: "Yes, you can visit our store during business hours to check out our laptop collection." },
    { question: "How are refurbished laptops different from new ones?", answer: "Refurbished laptops are pre-owned devices that have been restored to full functionality and tested for quality." },
    { question: "Are the batteries of refurbished laptops replaced or tested?", answer: "All batteries are tested for optimal performance. If needed, we replace them with high-quality alternatives." }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="mx-auto p-6">
            <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <div className="divide-y divide-gray-300 mx-10">
                {faqs.map((faq, index) => (
                    <div key={index} className="py-4">
                        <button
                            className="flex justify-between items-center w-full text-left text-lg font-medium focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span>{faq.question}</span>
                            {activeIndex === index ? <IoMdRemove className="text-xl" /> : <IoMdAdd className="text-xl" />}
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                        >
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
