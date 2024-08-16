'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import notFound from '../assets/notFound.jpg'

const NotFound: React.FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-gray-900">
     
      <div className="absolute inset-0 z-0">
        <Image
          src={notFound}
          alt="Not Found Background"
          className="w-full h-full object-fit object-center"
        />
      </div>

   
      <div className="relative z-10 bg-black bg-opacity-50 p-10 rounded-md text-center">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Page Not Found</h1>
        <p className="text-white mb-6">The page you are looking for doesn't exist or has been moved.</p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;