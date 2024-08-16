'use client';
import React from 'react';
import Swal from 'sweetalert2';

const ContactForm: React.FC = () => {
    const handleClick = () => {
        Swal.fire({
            title: 'Thank You!',
            text: 'Your message has been sent. We will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl grid grid-cols-1 md:grid-cols-2">
                <div className="hidden md:block items-center justify-center text-center">
                    <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                    <p className="text-sm">We'll be getting in touch with you soon.</p>
                </div>
                <div className="p-8 flex flex-col justify-center">
                    <form>
                        <div className="flex space-x-4">
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2"
                            />
                        </div>
                        <div className="mb-6">
                            <textarea
                                placeholder="Write your comment here..."
                                className="w-full border-b-2 border-gray-300 focus:border-red-500 outline-none py-2 resize-none"
                                rows={5}
                            ></textarea>
                        </div>
                        <button
                            type="button"  
                            onClick={handleClick} 
                            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

