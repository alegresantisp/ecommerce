'use client';

import React, { useState } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { useCart } from '@/components/Context/CartContext';

const CartIcon: React.FC = () => {
  const { cart } = useCart();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-600 hover:text-black relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <FaShoppingCart size={22} />
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center -translate-x-1/2 translate-y-1/2">
            {cart.length}
          </span>
        )}
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-60 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Cart</h3>
            <button onClick={() => setDropdownOpen(false)} className="text-gray-600 hover:text-black">
            </button>
          </div>
          <ul className="space-y-2">
            {cart.map(item => (
              <li key={item.id} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>x ${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartIcon;



/* 'use client'
import { useState, useEffect } from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';


interface CartItem {
  id: number;
  name: string;
  price: number;
}

const CartIcon = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [CartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      const cart = localStorage.getItem('cart');
      const parsedCart = cart ? JSON.parse(cart) : [];
      setCartItems(parsedCart);
    };
    updateCart();
    
  }, []);

  useEffect(() => {
    const updateCartCount = () => {
      const cartC = localStorage.getItem('cart');
      const parsedCart = cartC ? JSON.parse(cartC) : [];
      setCartCount(parsedCart.length);
    };
    updateCartCount();
  }, []);
 

  return (
    <div className="relative">
      <button
        className="flex items-center text-gray-600 hover:text-black relative"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <FaShoppingCart size={22}/>
        {CartCount > 0 && (
        <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center -translate-x-1/2 translate-y-1/2">
          {CartCount}
        </span>
      )}
     
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-60 bg-white shadow-lg rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Cart</h3>
            <button onClick={() => setDropdownOpen(false)} className="text-gray-600 hover:text-black">
              
            </button>
          </div>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>x ${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CartIcon; */
