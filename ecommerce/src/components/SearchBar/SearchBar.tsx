'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { getProductDB } from '../../helpers/product.helpers'; 
import IProduct from '../../interfaces/IProducts'; 
import Link from 'next/link';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductDB();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative flex items-center gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="border rounded-lg pl-3 pr-10 py-1 focus:outline-none focus:ring focus:border-red-300 w-full"
        placeholder="Search..."
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        <FaSearch size={16} />
      </div>
      {searchTerm && filteredProducts.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 shadow-lg z-10">
          <ul>
            {filteredProducts.map(product => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  {product.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
