'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import IProduct from '@/interfaces/IProducts';
import { useCart } from '@/components/Context/CartContext';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';

interface WishlistContextProps {
  wishlist: IProduct[];
  addToWishlist: (product: IProduct) => void;
  removeFromWishlist: (productId: number) => void;
  clearWishlist: () => void;
  moveToCart: (product: IProduct) => void;
}

const WishlistContext = createContext<WishlistContextProps>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  clearWishlist: () => {},
  moveToCart: () => {},
});

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<IProduct[]>([]);
  const {cart, addToCart } = useCart();
  const { user } = useAuth(); 
   
 
  
  useEffect(() => {
    loadGlobalWishlist();
  }, [user]);

  useEffect(() => {
    saveWishlistForUser();
  }, [wishlist, user]);

  useEffect(() => {
    // Sincroniza la wishlist con el carrito
    if (cart.length > 0) {
      const storedWishlist = localStorage.getItem(`wishlist_${user?.email}`);
      if (storedWishlist) {
        const parsedWishlist = JSON.parse(storedWishlist);
        const updatedWishlist = parsedWishlist.filter(
          (item: IProduct) => !cart.some((cartItem) => cartItem.id === item.id)
        );
        if (updatedWishlist.length !== parsedWishlist.length) {
          setWishlist(updatedWishlist);
          saveWishlistForUser();
        }
      }
    }
  }, [cart]);

  const loadGlobalWishlist = () => {
    if (typeof window !== 'undefined' && user?.email) { 
      const storedWishlist = localStorage.getItem(`wishlist_${user.email}`);
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    }
  };

  const saveWishlistForUser = () => {
    if (typeof window !== 'undefined' && user?.email) { 
      localStorage.setItem(`wishlist_${user.email}`, JSON.stringify(wishlist));
    }
  };

  const addToWishlist = (product: IProduct) => {
    // Verificar si el producto ya está en el carrito
    if (cart.some(cartItem => cartItem.id === product.id)) {
      Swal.fire({
        title: 'Product in Cart',
        text: 'The product is already in the cart. Do you still want to add it to the wishlist?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, add to wishlist',
        cancelButtonText: 'No, cancel'
      }).then(result => {
        if (result.isConfirmed) {
          // Agregar el producto a la wishlist si el usuario confirma
          const updatedWishlist = [...wishlist, product].sort((a, b) => a.price - b.price);;
          setWishlist(updatedWishlist);
          saveWishlistForUser();
          Swal.fire({
            title: 'Added to Wishlist',
            text: 'The product has been added to your wishlist.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            title: 'Cancelled',
            text: 'The product was not added to the wishlist.',
            icon: 'info',
            confirmButtonText: 'OK'
          });
        }
      });
      return;
    }
  
    // Si el producto no está en el carrito, agregarlo directamente a la wishlist
    if (wishlist.some(wishlistItem => wishlistItem.id === product.id)) {
      return;
    }
    
    const updatedWishlist = [...wishlist, product].sort((a, b) => a.price - b.price);
    setWishlist(updatedWishlist);
    saveWishlistForUser();
    Swal.fire({
      title: 'Added to Wishlist',
      text: 'The product has been added to your wishlist.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };
  

  const removeFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter(product => product.id !== productId);
    setWishlist(updatedWishlist);
    saveWishlistForUser();
  };

  const clearWishlist = () => {
    if (typeof window !== 'undefined' && user?.email) {
      localStorage.removeItem(`wishlist_${user.email}`);
      setWishlist([]);
    }
  };

  const moveToCart = (product: IProduct) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist, moveToCart }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};