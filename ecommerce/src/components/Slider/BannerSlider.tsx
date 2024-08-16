'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import banner1 from '../../assets/ban1.png';
import banner2 from '../../assets/ban2.png';

const BannerSlider = () => {
  const images = [banner1, banner2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-96">
      
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-300 to-transparent z-0"></div>
      <div className="w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
          className="transition-opacity duration-500 ease-in-out z-10"
        />
      </div>
    </div>
  );
};

export default BannerSlider;