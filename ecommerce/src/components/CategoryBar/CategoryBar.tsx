'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { getProductDB } from '@/helpers/product.helpers';
import { categoryNames } from '@/helpers/categoriesList';
import { ICategory } from '@/interfaces/ICategory';

const CategoryBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const products = await getProductDB();
        const uniqueCategories = Array.from(new Set(products.map(product => product.categoryId)))
          .map(id => {
            return {
              id,
              name: categoryNames[id] || 'Unknown'
            };
          });
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div className="hidden md:flex justify-center items-center space-x-6 py-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.id}`}
            className="relative text-gray-700 hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-100 hover:after:w-full"
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex justify-center items-center py-2">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-black focus:outline-none"
        >
          <FaBars size={24} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="relative text-gray-700 hover:text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-100 hover:after:w-full"
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBar;