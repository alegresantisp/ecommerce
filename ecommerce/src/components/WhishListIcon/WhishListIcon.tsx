// WishlistIcon.tsx
'use client';

import { useWishlist } from '@/components/Context/WishListContext';
import { FaHeart } from 'react-icons/fa';

const WishlistIcon = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="relative flex items-center">
      <FaHeart size={22} />
      {wishlist.length > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center -translate-x-1/2 translate-y-1/2">
          {wishlist.length}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon;


/* 'use client';

import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

const WishlistIcon = () => {
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = localStorage.getItem('wishlist');
      const parsedWishlist = wishlist ? JSON.parse(wishlist) : [];
      setWishlistCount(parsedWishlist.length);
    };
    updateWishlistCount();
  }, []);

  return (
    <div className="relative flex items-center">
      <FaHeart size={22} />
      {wishlistCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center -translate-x-1/2 translate-y-1/2">
          {wishlistCount}
        </span>
      )}
    </div>
  );
};

export default WishlistIcon; */
