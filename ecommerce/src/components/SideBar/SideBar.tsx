'use client'
import React from 'react';
import { ICategory } from '@/interfaces/ICategory';
import Link from 'next/link';

interface SideBarProps {
  type: 'categories' | 'user';
  categories?: ICategory[];
  userOptions?: string[];
}

const SideBar: React.FC<SideBarProps> = ({ type, categories, userOptions }) => {
  return (
    <div className="space-y-4 p-4 bg-gray-200">
      {type === 'categories' && categories && categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.id}`}
          className="block text-gray-700 hover:text-black truncate sm:text-sm"
        >
          {category.name}
        </Link>
      ))}
       {type === 'user' && userOptions && userOptions.map((option, index) => (
        <Link
          key={index}
          href={`/dashboard/${option.toLowerCase().replace(' ', '-')}`}
          className="block text-gray-700 hover:text-black truncate sm:text-sm"
        >
          {option}
        </Link>
      ))}
      <Link
            href="/"
            className="block mt-6 py-2 px-4 text-blue-500 rounded-lg hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300"
            >
            Go to Home
      </Link>
          
        
    </div>
  );
};

export default SideBar; 