'use client';

import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import IProduct from '@/interfaces/IProducts';
import { useWishlist } from '@/components/Context/WishListContext';
import { useAuth } from '@/components/Context/AuthContext';


interface WishlistButtonProps {
  product: IProduct;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { user } = useAuth(); 
  const [isWished, setIsWished] = useState<boolean>(false);

  useEffect(() => {
    setIsWished(wishlist.some(item => item.id === product.id));
  }, [wishlist, product.id]);

  const handleClick = () => {
    if (isWished) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
    setIsWished(!isWished);
  };

  if (!user) {
    return null; 
  }

  return (
    <button
      onClick={handleClick}
      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
      aria-label="Add to wishlist"
    >
      {isWished ? (
        <FaHeart size={24} color="red" />
      ) : (
        <FaRegHeart size={24} color="gray" />
      )}
    </button>
  );
};

export default WishlistButton;




/* 'use client';

import React, { useState, useEffect } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import IProduct from '@/interfaces/IProducts';

interface WishlistButtonProps {
  product: IProduct;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const [isWished, setIsWished] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const wishedItems = JSON.parse(localStorage.getItem('wishlist') || '[]');
      setIsWished(wishedItems.some((item: IProduct) => item.id === product.id));
    }
  }, [product.id]);

  const handleClick = () => {
    if (typeof window !== 'undefined') {
      const wishedItems = JSON.parse(localStorage.getItem('wishlist') || '[]');
      const updatedItems = isWished ? wishedItems.filter((item: IProduct) => item.id !== product.id)
      : [...wishedItems, product];

      localStorage.setItem('wishlist', JSON.stringify(updatedItems));
      setIsWished(!isWished);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md"
      aria-label="Add to wishlist"
    >
      {isWished ? (
        <FaHeart size={24} color="red" />
      ) : (
        <FaRegHeart size={24} color="gray" />
      )}
    </button>
  );
};

export default WishlistButton;
 */






