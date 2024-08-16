'use client';
import React from 'react';
import IProduct from '@/interfaces/IProducts';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/components/Context/CartContext';
import WishlistButton from '../WhishButton/WishButton';

interface ProductCardProps {
  product: IProduct;
  showDescription?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showDescription }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <WishlistButton product={product} />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      {showDescription && <p className="text-gray-600 mb-2">{product.description}</p>}
      <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
      <span className='flex space-x-2 mt-2'>
        <button onClick={handleAddToCart} className='bg-red-500 hover:bg-red-400 text-white font-bold text-sm py-1 px-3 rounded'>
          Add to Cart
        </button>
        <Link href={`/product/${product.id}`}>
          <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold text-sm py-1 px-3 rounded'>
            View Product
          </button>
        </Link>
      </span>
    </div>
  );
};

export default ProductCard;



/* 'use client'
import React from 'react'
import IProduct from '@/interfaces/IProducts'
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/helpers/cart.helper';
import WishlistButton from '../WhishButton/WishButton';


interface ProductCardProps{
    product: IProduct;
    showDescription?: boolean;
}

const ProductCard:React.FC<ProductCardProps> = ({product, showDescription }) => {


    const handleAddToCart = () => {
      addToCart(product);
    };

    return (
        <div className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}  
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <WishlistButton product={product} />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          {showDescription && <p className="text-gray-600 mb-2">{product.description}</p>}
          <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-500">In Stock: {product.stock}</p>
          <span className='flex space-x-2 mt-2'>
            <button onClick={handleAddToCart} className='bg-red-500 hover:bg-red-400 text-white font-bold text-sm py-1 px-3 rounded'>Add to Cart</button>
            <Link href={`/product/${product.id}`}>
            <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold text-sm py-1 px-3 rounded'>View Product</button>
            </Link>
            
          </span>
          
        </div>
      );
    };

export default ProductCard */