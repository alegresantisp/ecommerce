'use client'
import React, {useState} from 'react';
import Link from 'next/link';
import { ICategory } from '../../interfaces/ICategory';
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaHeadphones, FaCamera, FaPrint, FaDesktop, FaCogs, FaTags, FaStopwatch} from 'react-icons/fa';


const iconMap = {
    Smartphones: FaMobileAlt,
    Laptops: FaLaptop,
    Tablets: FaTabletAlt,
    SmartWatch: FaStopwatch,
    Headphones: FaHeadphones,
    Cameras: FaCamera,
    Printers: FaPrint,
    Monitors: FaDesktop,
    Accessories: FaCogs,
};

interface CategoryGridProps {
    categories: ICategory[];
   
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : categories.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < categories.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative p-4">
      <div className="flex items-center gap-1 text-red-500 mt-20 mb-1">
        <FaTags size={15} />
        <p className="text-lg font-semibold">Categories</p>
      </div>
      <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
      
      <div className="block md:hidden relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {categories.map((category) => {
            const Icon = iconMap[category.name as keyof typeof iconMap];
            if (!Icon) {
              console.error('Icon not found for category:', category.name);
              return null;
            }
            return (
              <Link key={category.id} href={`/category/${category.id}`} className="flex-shrink-0 w-full">
                <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-red-400 cursor-pointer transition-colors duration-300">
                  <div className="text-4xl mb-2">
                    <Icon />
                  </div>
                  <p className="text-lg font-semibold">{category.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300"
        >
          &gt;
        </button>
      </div>
      
      <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const Icon = iconMap[category.name as keyof typeof iconMap];
          if (!Icon) {
            console.error('Icon not found for category:', category.name);
            return null;
          }
          return (
            <Link key={category.id} href={`/category/${category.id}`}>
              <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-red-400 cursor-pointer transition-colors duration-300">
                <div className="text-4xl mb-2">
                  <Icon />
                </div>
                <p className="text-lg font-semibold">{category.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;