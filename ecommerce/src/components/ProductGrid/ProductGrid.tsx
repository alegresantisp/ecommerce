'use client'
import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import IProduct from '@/interfaces/IProducts';
import { FaTags } from 'react-icons/fa';

interface ProductGridProps {
  products: IProduct[];
  showDescription?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, showDescription }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : products.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < products.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-1 text-red-500 mt-20 mb-1">
        <FaTags size={15} />
        <p className="text-lg font-semibold">Products</p>
      </div>
      <h2 className="text-2xl font-bold mb-2">All our Products</h2>
      
      <div className="block md:hidden relative overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full">
              <ProductCard product={product} showDescription={showDescription} />
            </div>
          ))}
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
      
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} showDescription={showDescription} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
