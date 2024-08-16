'use client';

import React from 'react';
import { FaTrash } from 'react-icons/fa';
import IProduct from '@/interfaces/IProducts';
import { useWishlist } from '@/components/Context/WishListContext';
import Link from 'next/link';

const WishlistPage: React.FC = () => {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();

  return (
    <div className="container mx-auto p-4">
      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Your wishlist is empty</p>
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Explore productos
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Whishlist</h1>
          <div className="space-y-4">
            {wishlist.map(product => (
              <div key={product.id} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => moveToCart(product)}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 rounded"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="ml-4 text-red-500"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
              
            ))}
          
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;


/* 'use client';

import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import IProduct from '@/interfaces/IProducts';
import { addToCart } from '@/helpers/cart.helper';
import Link from 'next/link';

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<IProduct[]>([]);
  const [isWishlistEmpty, setIsWishlistEmpty] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const fetchWishlist = async () => {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          const wishlistItems: IProduct[] = JSON.parse(storedWishlist);
          setWishlist(wishlistItems);
          setIsWishlistEmpty(wishlistItems.length === 0);
        } else {
          setIsWishlistEmpty(true);
        }
      };

      fetchWishlist();
    }
  }, []);

  const removeFromWishlist = (productId: number) => {
    if (typeof window !== 'undefined') {
      const storedWishlist = localStorage.getItem('wishlist');
      if (storedWishlist) {
        const wishlistItems: IProduct[] = JSON.parse(storedWishlist);
        const updatedWishlist = wishlistItems.filter(product => product.id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        setWishlist(updatedWishlist);
        setIsWishlistEmpty(updatedWishlist.length === 0);
      }
    }
  };

  const handleAddToCart = (product: IProduct) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="container mx-auto p-4">
      {isWishlistEmpty ? (
        <div className="text-center">
          <p className="text-xl font-bold mb-4">Your Wishlist is empty</p>
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Explore Products
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Whishlist</h1>
          <div className="space-y-4">
            {wishlist.map(product => (
              <div key={product.id} className="flex justify-between items-center border p-4 rounded-lg shadow-sm">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold">{product.name}</h2>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-3 rounded"
                  >
                    Add to cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="ml-4 text-red-500"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

 */