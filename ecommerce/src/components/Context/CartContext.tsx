'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import IProduct from '@/interfaces/IProducts';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2'; 

interface CartContextProps {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState<IProduct[]>([]);
  
    useEffect(() => {
      if (user?.email) {
        loadGlobalCart();
      } else {
        setCart([]);
      }
    }, [user]);
  
    useEffect(() => {
      if (user?.email) {
        saveCartForUser();
      }
    }, [cart, user]);
  
    const loadGlobalCart = () => {
      if (user?.email) {
        const storedCart = localStorage.getItem(`cart_${user.email}`);
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        } else {
          setCart([]);
        }
      }
    };
  
    const saveCartForUser = () => {
      if (user?.email) {
        localStorage.setItem(`cart_${user.email}`, JSON.stringify(cart));
      }
    };
  
    const addToCart = (product: IProduct) => {
      if (!user?.email) {
        Swal.fire({
          title: 'Log in, Please!',
          text: 'You need to log in to make a purchase.',
          icon: 'error',
          confirmButtonText: 'Login'
        }).then(() => {
          window.location.href = '/login';
        });
        return;
      }
  
      const isProductInCart = cart.some(cartItem => cartItem.id === product.id);
      if (isProductInCart) {
        Swal.fire({
          title: 'Warning!',
          text: 'This product is already in the cart.',
          icon: 'warning',
          confirmButtonText: 'OK'
        });
        return;
      }
  
      setCart(prevCart => {
        const updatedCart = [...prevCart, product].sort((a, b) => a.price - b.price);
        saveCartForUser();
        return updatedCart;
      });
      Swal.fire({
        title: 'Success!',
        text: 'Product added to the cart.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    };
  
    const removeFromCart = (productId: number) => {
      setCart(prevCart => {
        const updatedCart = prevCart.filter(product => product.id !== productId);
        saveCartForUser();
        return updatedCart;
      });
    };
  
    const clearCart = () => {
      if (user?.email) {
        localStorage.removeItem(`cart_${user.email}`);
        setCart([]);
      }
    };
  
    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  };