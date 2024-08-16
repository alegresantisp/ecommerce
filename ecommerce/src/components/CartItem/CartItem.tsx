'use client';

import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import IProduct from '@/interfaces/IProducts';
import Link from 'next/link';
import { useCart } from '@/components/Context/CartContext';

const CartItem: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  useEffect(() => {
    setIsCartEmpty(cart.length === 0);
  }, [cart]);

  return (
    <div className="container mx-auto p-4">
      {isCartEmpty ? (
        <div className="text-center">
          <p className="text-xl font-bold mb-4">The cart is empty.</p>
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Explore products
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <div className="space-y-4">
            {cart.map(product => (
              <div key={product.id} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                  <span>{product.name}</span>
                </div>
                <div className="flex items-center">
                  <span>${product.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(product.id)} className="ml-4 text-red-500">
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold">
              Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
            </span>
            <Link href="/checkout">
              <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-3 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;




/*  import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import IProduct from '@/interfaces/IProducts';
import Link from 'next/link';

const CartItem: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const [userSession, setUserSession] = useState<{ token: string } | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("userSession");
    if (userData) {
      setUserSession(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart: IProduct[] = JSON.parse(storedCart);
      setCart(parsedCart);
      setIsCartEmpty(parsedCart.length === 0);
    } else {
      setIsCartEmpty(true);
    }
  }, []);

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    setIsCartEmpty(updatedCart.length === 0);
  };

  return (
    <div className="container mx-auto p-4">
      {isCartEmpty ? (
        <div className="text-center">
          <p className="text-xl font-bold mb-4">El carrito está vacío</p>
          <Link href="/">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
              Comprar productos
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Tu Carrito</h1>
          <div className="space-y-4">
            {cart.map(product => (
              <div key={product.id} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-4" />
                  <span>{product.name}</span>
                </div>
                <div className="flex items-center">
                  <span>${product.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(product.id)} className="ml-4 text-red-500">
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold">
              Total: ${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
            </span>
            <Link href="/checkout">
              <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-1 px-3 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem; 
 */
